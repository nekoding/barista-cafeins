import { Command } from 'commander'

const command = new Command()
command
  .name('Barista CLI')
  .description(
    'A robust database migration and synchronization tool designed for seamless transition between Silfi and Cafeins'
  )
  .version('0.1.0')

command.parse(process.argv)
