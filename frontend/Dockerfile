# Use the official Node.js 14 image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY . .
RUN rm -rf node_modules

# Install pnpm
RUN npm install -g pnpm

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory

RUN pnpm run build
# Build the React app


# Define the command to run the application
CMD ["pnpm", "run" , "preview"]
