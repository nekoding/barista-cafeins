import { Command } from 'commander'
import { syncronizeAction } from './handler'
import { logger } from './utils/logger'

const barista = new Command()
barista
  .name('Barista CLI')
  .description(
    'A robust database migration and synchronization tool designed for seamless transition between Silfi and Cafeins',
  )
  .version('0.1.0')

// handler sync command
barista
  .command('barista:sync')
  .description('Synchronize table from Silfi to Cafeins')
  .argument('<table>', 'Table name to be synchronized')
  .action(syncronizeAction)

try {
  await barista.parseAsync(process.argv)
} catch (error: any) {
  logger.error(error.message)
  process.exit(1)
}
