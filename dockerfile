# Dockerfile

# Base Image
FROM node:16

ENV MONGO_URL=mymongo

# Create & set working directory
WORKDIR /usr/src/app

# Copy source files
COPY . .

# Install dependencies
RUN npm install 

EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]