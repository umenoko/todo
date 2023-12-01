FROM oven/bun:1.0 AS base
WORKDIR /app

FROM base AS development
COPY . /app
EXPOSE 80
CMD ["bun", "dev"]

FROM base AS build
COPY . /app
RUN bun install && bun run build

FROM oven/bun:1.0-slim as production
WORKDIR /app
COPY package.json bun.lockb /app/
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 80
CMD ["bun", "start"]
