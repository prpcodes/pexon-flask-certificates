FROM node:18-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Expose port 3000
EXPOSE 3000

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy everything else
COPY . ./

# Start the app
CMD ["npm", "run", "dev"]

