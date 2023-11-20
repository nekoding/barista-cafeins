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
    {
      name: 'sync routes',
      script: './app.ts',
      args: ['barista:sync', 'route'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
    {
      name: 'sync cables',
      script: './app.ts',
      args: ['barista:sync', 'cable'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
    {
      name: 'sync segments',
      script: './app.ts',
      args: ['barista:sync', 'segment'],
      interpreter: 'bun',
      cron_restart: '*/30 * * * *',
    },
  ],
}
