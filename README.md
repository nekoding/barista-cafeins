# Barista-Cafeins data migrator

Migrate data from silfi to cafeins.

## How to run

First you need download / clone this repo using

```sh
git clone https://github.com/firmansyahrr/barista-app.git
cd barista-app
cp .env.example .env
```

then configure `.env` value

### Command Unix / Linux

```sh
bun app.ts barista:sync [table_name]

# print help
bun app.ts barista:sync --help
```

Supported table name parameter

- [x] project
- [x] sitepoint
- [x] asset
- [x] route
- [x] cable
- [x] segment

Or if you like using container style-app you can run this app using command bellow

### Docker

```sh
docker build -t barista-cafeins .
docker run -d -v ./logs:/usr/src/app/logs --name barista barista-cafeins
```

### Docker compose

```sh
docker compose up -d
```

### Podman

```sh
podman build -t barista-cafeins
podman run -d -v ./logs:/usr/src/app/logs --name barista barista-cafeins
```

### PM2

if you want using pm2 to run this app you can using this command

```sh
pm2 start pm2.config.cjs
```
