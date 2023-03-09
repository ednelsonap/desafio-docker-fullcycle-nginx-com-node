FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget
RUN npm install

EXPOSE 3000

CMD [ "node","index.js" ]