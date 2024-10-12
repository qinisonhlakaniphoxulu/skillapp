# Stage 1: Build the application
FROM node:20.0-alpine as builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Use Nginx to serve the built application
FROM nginx:stable-alpine

# Copy build files from the builder stage to Nginx's default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
