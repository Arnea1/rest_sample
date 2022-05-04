FROM node:16.3.0-alpine

COPY ./ ./

RUN npm install
EXPOSE 3001

CMD ["node", "app.js"]