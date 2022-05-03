FROM mhart/alpine-node:16

COPY ./ ./

RUN npm install

CMD ["node", "app.js"]