FROM oven/bun:1.0 AS base
WORKDIR /app

FROM base AS development
COPY . /app
EXPOSE 80
CMD ["bun", "dev", "--port", "80", "--hostname", "0.0.0.0"]

FROM base AS build
COPY . /app
ENV NODE_ENV=production
RUN bun install && bun run build

FROM oven/bun:1.0-slim as production
WORKDIR /app
ENV NODE_ENV=production
COPY next.config.js package.json bun.lockb /app/
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY public /app/public
EXPOSE 80
CMD ["bun", "start", "--port", "80", "--hostname", "0.0.0.0"]
