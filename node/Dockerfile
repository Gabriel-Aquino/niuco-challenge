FROM node:14.17.6

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN apt-get update

EXPOSE 3000

# CMD [ "node", "index.js" ]
