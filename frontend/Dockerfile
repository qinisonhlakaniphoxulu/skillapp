# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install
#
# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a simple web server to serve the static files
FROM nginx:stable-alpine

# Copy the build output to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
