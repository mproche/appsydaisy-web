# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install production dependencies.
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN npm run build

# Expose the port the app runs on.
EXPOSE 8080

# Start the application.
CMD [ "npm", "start" ]