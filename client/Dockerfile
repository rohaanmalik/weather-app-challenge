FROM node:12-alpine3.14

WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./

COPY package.json /app

COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD yarn start