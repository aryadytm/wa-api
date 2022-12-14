# API for Sending Message through WA

## API Endpoints

(GET) Link WA Account - Scan QR Code **(Required Before Able to Send WA Messages)** 
```
https://rianto-public.loca.lt/link_wa_account
```

(GET) Send WA Message
```
https://rianto-public.loca.lt/send_wa_message/{WA number}/{Message}
```

## System Requirements

- OS: Windows 10+ or Ubuntu 20.04+ or Debian Buster+ (Tested on Ubuntu 20.04 LTS)
- At least 4 GB of RAM (Because this program emulates a browser that controls WA through WhatsApp Web)
- At least Dual core CPU: AMD or Intel (Tested on AMD Ryzen 7 3700X)
- 64-bit kernel and CPU support for virtualization
- **Compatible with Docker (Mandatory!)**

## Installation and Usage

**Installation Steps for Windows**
1. Download Docker Desktop and Install [Click Here](https://www.docker.com/products/docker-desktop/)
2. Download this source code zip file [Click Here](https://github.com/aryadytm/wa-api/archive/refs/tags/v0.1.1.zip)
3. Extract this zip file anywhere
4. Go to the folder where extracted files located
5. Open ``terminal`` or ``cmd`` at that folder
6. In the terminal, run `docker-compose up` or `docker compose up`. Then wait until finished.
7. Scan WhatsApp QR code by visiting `https://rianto-public.loca.lt/link_wa_account` 
8. API `https://rianto-public.loca.lt/send_wa_message/{WA number}/{Message}` is ready to use!

**Installation Steps for Ubuntu (Linux):**
1. Run `git clone https://github.com/aryadytm/wa-api`
2. Change directory into `wa-api` by running `cd wa-api`
3. If your OS is **Ubuntu**, install Docker by running `sh install-docker.sh`. Otherwise, look for [Docker Installation Tutorials](https://docs.docker.com/engine/install/)
4. Run `docker-compose up` or `docker compose up` then wait for few minutes
5. The API should be running. Before you can send messages, you need to link your WA account by going to `https://rianto-public.loca.lt/link_wa_account` and then scan QR code
6. You can start sending WA messages using HTTP Request to (GET) `https://rianto-public.loca.lt/send_wa_message/{WA number}/{Message}` 

## How it Works?

This application emulates a browser instance (such as Google Chrome) inside the **Docker Container** system. 
The browser then opens WhatsApp Web and sends the message using the browser instance.

## Configuration

You can change the subdomain and admin number in the `config.json`. The admin number is only used to notify if the API is running correctly.