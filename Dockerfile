FROM node:16-alpine

WORKDIR /app

COPY . .

# TODO: #shatr заменить на раздачу статической папки через nginx (https://docusaurus.io/docs/deployment#self-hosting)
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "serve"]