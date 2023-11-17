module.exports = {
  apps: [
    {
      name: 'sync projects',
      script: './app.ts',
      args: ['barista:sync', 'project'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
    {
      name: 'sync sitepoints',
      script: './app.ts',
      args: ['barista:sync', 'sitepoint'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
    {
      name: 'sync assets',
      script: './app.ts',
      args: ['barista:sync', 'asset'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
  ],
}
