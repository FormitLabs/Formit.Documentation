FROM node:lts

WORKDIR /app

EXPOSE 3000 8888

COPY /docs /app/docs

COPY /blog  /app/blog

RUN npm install

CMD ["npm", "start"]
