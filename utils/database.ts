import { PrismaClient as PrismaClientBarista } from '../prisma/barista/barista-client'
import { PrismaClient as PrismaClientCafeins } from '../prisma/cafeins/cafeins-client'
import { logger } from './logger'

const baristaClient = new PrismaClientBarista({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  errorFormat: 'minimal',
})

const cafeinsClient = new PrismaClientCafeins({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  errorFormat: 'minimal',
})

// LOG error database
baristaClient.$on('error', (e: any) => {
  logger.error(e.message.replace(/\n/g, ''))
})

cafeinsClient.$on('error', (e: any) => {
  logger.error(e.message.replace(/\n/g, ''))
})

baristaClient.$on('query', (e: any) => {
  if (process.env.NODE_ENV === 'DEBUG') {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  }
})

cafeinsClient.$on('query', (e: any) => {
  if (process.env.NODE_ENV === 'DEBUG') {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  }
})

export { baristaClient, cafeinsClient }
