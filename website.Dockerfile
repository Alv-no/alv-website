# Stage 1 - Building the website
FROM node:14-alpine

WORKDIR /app
RUN mkdir -p /app/packages/website
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY packages/website /app/packages/website/

# For some reason `yarn --immutable` failed,
# I assue it's because I don't add all of the packages here,
# that results in yarn.lock having dependencies that is not actually used.
# However I would not originally think that failed `yarn --immutable`,
# instead I would have liked it to just use yarn.lock and not care about `package.json`
# This does not seem to be the case.
RUN yarn

RUN yarn workspace website run disable-telemetry
RUN yarn workspace website run build

# Stage 2 - Webserver using Ngnix
FROM nginx:1.18-alpine
COPY --from=0 /app/packages/website/public /usr/share/nginx/html/

EXPOSE 80
