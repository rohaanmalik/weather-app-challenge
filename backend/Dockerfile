FROM node:12-alpine3.14

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD node src/index.js

EXPOSE 4000