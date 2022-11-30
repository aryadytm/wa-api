//@ts-check
// Start Import
import * as utils from './utils'
import WAClient from './whatsapp_client'
import express from 'express'
import cors from 'cors';
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// End Import

const PORT = 40001

const app = express();

const client = new WAClient();

// Create helper functions


// adding Helmet to enhance your Rest API's security
app.use(helmet());

// use cors on all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.type('json');
  res.send(`Good news, API is running! If you haven't linked your WA account, please go to ${client.getUrl()}/link_wa_account`);
});


app.get('/link_wa_account', (req, res) => {
  
  var resp = client.qrImageStr
  
  if (!client.isConnected) {
    res.type('json')
  }
  
  return res.send(resp)
})


app.get('/reset_wa_account', (req, res) => {
  
  client.qrImageStr = "Unlinking your account... Please refresh this page after 1 minute."
  res.redirect("/link_wa_account")
  
  new Promise(resolve => setTimeout(resolve, 8000)).then(() => {
    client.onResetAccount()
  })
  
}) 


app.get('/send_wa_message/:targetNum/:message', (req, res) => {
  
  res.type('json');
  
  if (!client.isConnected) {
    return res.status(400).send(`You have not linked any account. Please link it first.`)
  }
  
  if (String(req.get('user-agent')).toLowerCase().includes("whatsapp")) {
    return res.status(400).send(`Not allowed`)
  }
  
  const targetNum = utils.preprocessTarget(req.params.targetNum)
  const message = utils.preprocessMessage(req.params.message)
  
  if (targetNum.length <= 5 || targetNum.length > 20) {
    return res.status(400).send(`Gagal kirim pesan karena nomor target invalid.`)
  }
  
  if (message.length > 1000) {
    return res.status(400).send(`Gagal kirim pesan karena jumlah karakter melebihi 1000`)
  }
  
  try {
    client.client.sendMessage(targetNum, message).catch().finally()
    return res.send(`Berhasil kirim pesan ke ${targetNum}\n-----------\nIsi Pesan: ${message}`)
  } catch (err) {
    return res.status(500).send(`Gagal kirim pesan: ${err.message}`)
  }
  
});


app.listen(PORT, () =>
  console.log(`WA API listening on port ${PORT}!`),
);


