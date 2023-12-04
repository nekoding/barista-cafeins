FROM oven/bun:debian as base
WORKDIR /usr/src/app
RUN apt update && apt install -y bash curl cron vim

# Install nvm with node and npm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash && source ~/.bashrc
RUN nvm install node && nvm use node
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
RUN cd /temp/prod && bun install --frozen-lockfile --ignore-scripts --production

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

# Create log directory
RUN mkdir -p /var/log/cron

# Copy the cron job file
COPY cronjob /etc/cron.d/cronjob

# Set the correct permissions
RUN chmod 0644 /etc/cron.d/cronjob

# Apply the cron job
RUN crontab /etc/cron.d/cronjob

# Start cron in the foreground
CMD ["cron", "-f"]

# run the app
# ENTRYPOINT [ "pm2-runtime", "start", "pm2.config.cjs" ]
