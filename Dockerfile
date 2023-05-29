FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]
EXPOSE 4200
