FROM node:12

WORKDIR /app

COPY app/package.json .

RUN npm install

COPY app .

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl --fail http://localhost:3000/health || exit 1
CMD ["npm", "start"]