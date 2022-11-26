# API for Sending Message through WA

## API Endpoints

(GET) Link WA Account - Scan QR Code (Required Before Able to Send WA Messages)
```
https://rianto-public.loca.lt/link_wa_account
```

(GET) Send WA Message
```
https://rianto-public.loca.lt/send_wa_message/{WA number}/{Message}
```

## System Requirements

- OS: Windows 10+ or Ubuntu 20.04+ or Debian Buster+ (Tested on Ubuntu 20.04 LTS)
- At least 4 GB of RAM
- At least Dual core CPU: AMD or Intel (Tested on AMD Ryzen 7 3700X)
- 64-bit kernel and CPU support for virtualization
- For servers, it must be able to run *Docker*

## Installation and Usage

Installation Steps:
1. *Mandatory:* Install *Docker* and *Docker Compose* on your system ([Tutorial](https://docs.docker.com/engine/install/))
2. Run `git clone https://github.com/aryadytm/wa-api`
3. Change directory into `wa-api`
4. Run `docker-compose up` then wait for few minutes
5. The API should be running. Before you can send messages, you need to link your WA account by going to `https://rianto-public.loca.lt/link_wa_account` and then scan QR code
6. You can start sending WA messages using HTTP Request to (GET) `https://rianto-public.loca.lt/send_wa_message/{WA number}/{Message}` 

## How it Works?

This application emulates a browser instance (such as Google Chrome) inside the *Docker Container* system. 
The browser then opens WhatsApp Web and sends the message using the browser instance.