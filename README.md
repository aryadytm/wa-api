# WhatsApp API

Developer Mode
```bash
# first, make sure the CLI is inside devcontainer
npm install
# to start serving whatsapp bot
npx ts-node -T src/app.ts
```

Usage (Docker Compose)
```bash
docker-compose build
docker-compose up
# Scan QR code here
docker-compose up -d
```