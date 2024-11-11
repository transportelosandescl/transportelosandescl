# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application with static export enabled by next.config.js
RUN npm run build

# Start a lightweight server for testing or development (optional)
# Alternatively, this container could just output the static files for external NGINX to serve.
CMD ["npx", "serve", "-s", "out"]
