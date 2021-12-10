FROM nginx:1.20.2-alpine

# Stage 1 - Install node, yarn and python
RUN apk add --update nodejs yarn
RUN apk add --no-cache python3 make gcc g++

# Stage 2 - Building the website
WORKDIR /app
RUN mkdir -p /app/packages/website
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY .yarn/plugins /app/.yarn/plugins/
COPY packages/website /app/packages/website/
COPY packages/shared-components /app/packages/shared-components/

RUN yarn

RUN yarn workspace website run disable-telemetry

# The build step shouldn't be cached since it's non determenistic
# As such we add the next line to try and do a cache bust
# Recommended by: https://stackoverflow.com/a/58801213/359825
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache

# Ensure that proper .env files exists before building
RUN test -f "/app/packages/website/.env.production"
RUN yarn workspace website run build

# Stage 3 - Setup nginx webserver
RUN cp -r /app/packages/website/public/* /usr/share/nginx/html/
COPY website.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Stage 4 - Setup and run supervisor
RUN apk update && apk add --no-cache supervisor
COPY supervisord.conf /app/supervisord.conf
CMD ["supervisord","-c","/app/supervisord.conf"]

