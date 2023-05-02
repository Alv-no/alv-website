FROM node:16 AS builder
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .

RUN yarn
RUN yarn turbo run build --filter=video-party

FROM node:alpine AS runner
WORKDIR /app

COPY --from=builder /app/packages/video-party/next.config.js .
COPY --from=builder  /app/packages/video-party/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/packages/video-party/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/video-party/.next/static ./packages/video-party/.next/static

CMD PORT=80 node ./packages/video-party/server.js

EXPOSE 80
