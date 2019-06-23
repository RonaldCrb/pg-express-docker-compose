FROM node:10-alpine

ENV NODE_ENV=development

RUN apk add --no-cache tini 

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY . .

ENTRYPOINT ["tini", "--"]

CMD ["node", "index.js"]