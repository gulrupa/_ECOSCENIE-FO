
FROM node

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn global add @angular/cli
RUN yarn install

CMD [ "yarn", "run", "start" ]
EXPOSE 4200
