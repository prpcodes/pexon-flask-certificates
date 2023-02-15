FROM node:18-alpine

# Set the working directory to /app inside the container
WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 3000
EXPOSE 3000

# Copy everything 
COPY . ./

# Install dependencies
RUN npm install --silent


ENTRYPOINT ["/entrypoint.sh"]

# Start the app
CMD ["npm", "run", "dev"]