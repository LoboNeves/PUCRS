FROM node:12

WORKDIR /app

COPY package.json .

RUN npm install

COPY 03-DevopsBasico/app .

EXPOSE 3000

CMD ["npm", "start"]