FROM node:18.10.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src .

EXPOSE 3000

CMD ["node", "src/api/server.js"]
