import { Command } from 'commander'
import { syncHandler } from './handlers/handler'

const barista = new Command()
barista
  .name('Barista CLI')
  .description(
    'A robust database migration and synchronization tool designed for seamless transition between Silfi and Cafeins',
  )
  .version('0.1.0')

// handler sync command
barista
  .command('sync')
  .description('Synchronize table from Silfi to Cafeins')
  .argument('<table>', 'Table name to be synchronized')
  .action(syncHandler)

try {
  await barista.parseAsync(process.argv)
} catch (error) {
  console.error(error)
}
