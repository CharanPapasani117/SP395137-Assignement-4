# Use Node.js image to build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
