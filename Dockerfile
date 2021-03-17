# Get base image of node
FROM node:latest
# Create working directory for app called "/app" that serves as the root
WORKDIR /app
# Install dependencies and run the start script from each packages.json
CMD ls -ltr && npm install && npm start