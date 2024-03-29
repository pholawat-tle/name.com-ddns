FROM node:14-alpine3.13
WORKDIR /app

COPY package.json package.json
RUN npm install

COPY . .

CMD ["npm","run","start"]
