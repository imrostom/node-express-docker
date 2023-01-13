FROM node:lts-alpine

# Create app directory
WORKDIR /home/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package.json
COPY package-lock.json package-lock.json

# install node package dependency
RUN npm install

# Bundle app source
COPY . .