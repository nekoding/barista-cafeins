FROM oven/bun:1-alpine as base
WORKDIR /usr/src/app
RUN apk add --no-cache bash curl git nodejs npm
RUN npm install pm2 -g


# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS dev
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --ignore-scripts

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM dev AS prerelease
COPY --from=dev /temp/dev/node_modules node_modules
COPY . .

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=dev /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/. .
COPY --from=prerelease /usr/src/app/package.json .

# run the app
ENTRYPOINT [ "pm2-runtime", "start", "pm2.config.cjs" ]
