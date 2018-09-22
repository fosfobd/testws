FROM node:8-alpine

RUN apk --no-cache add \
  bash

WORKDIR /code

EXPOSE 3080

COPY ./package.json .

RUN npm install

ENTRYPOINT npm run start

