FROM node:8-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install

EXPOSE 3080

ENTRYPOINT npm run start

