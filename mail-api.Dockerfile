FROM node:14

WORKDIR /app

RUN mkdir -p /app/packages/mail-api
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY .yarn/plugins /app/.yarn/plugins/
COPY packages/mail-api /app/packages/mail-api/

RUN test -f "/app/packages/mail-api/.env"

RUN yarn

WORKDIR /app/packages/mail-api

EXPOSE 80
CMD [ "yarn",  "start" ]
