FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DB_IP=172.17.0.2
ENV MONGO_DB_PORT=27017

EXPOSE 8000

CMD ["node", "server.js"]