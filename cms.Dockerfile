# Stage 1 - Building the website
FROM node:14

WORKDIR /app
RUN mkdir -p /app/packages/website
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY packages/cms /app/packages/cms/

RUN yarn

RUN yarn workspace cms run build

# Stage 2 - Webserver using Ngnix
FROM nginx:1.18-alpine
COPY --from=0 /app/packages/cms/dist /usr/share/nginx/html/

EXPOSE 80
