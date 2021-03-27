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

# The build step shouldn't be cached since it's non determenistic
# As such we add the next line to try and do a cache bust
# Recommended by: https://stackoverflow.com/a/58801213/359825
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN yarn workspace website run build

# Stage 2 - Webserver using Ngnix
FROM nginx:1.18-alpine
COPY --from=0 /app/packages/website/public /usr/share/nginx/html/

EXPOSE 80
