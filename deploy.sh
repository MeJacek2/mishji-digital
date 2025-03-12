#!/bin/bash

# Build the application
npm run build

# Create deployment archive
tar -czf deploy.tar.gz .next public package.json package-lock.json next.config.js server.js ecosystem.config.js

# Upload to server (replace with your server details)
scp deploy.tar.gz username@your-domain.com:~/mishji-digital/

# SSH into server and deploy
ssh username@your-domain.com << 'ENDSSH'
cd ~/mishji-digital
tar -xzf deploy.tar.gz
npm install --production
pm2 restart mishji-digital
ENDSSH

# Clean up local archive
rm deploy.tar.gz 