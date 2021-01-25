# Stage 1 - Building the website
FROM node:14

WORKDIR /app
RUN mkdir -p /app/packages/website
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY .yarn/plugins /app/.yarn/plugins/
COPY packages/website /app/packages/website/

RUN yarn

RUN yarn workspace website run disable-telemetry
RUN yarn workspace website run build

# Stage 2 - Webserver using Ngnix
FROM nginx:1.18-alpine
COPY --from=0 /app/packages/website/public /usr/share/nginx/html/

EXPOSE 80
