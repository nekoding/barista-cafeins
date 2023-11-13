import { PrismaClient as PrismaClientBarista } from './prisma/barista/barista-client'
import { PrismaClient as PrismaClientCafeins } from './prisma/cafeins/cafeins-client'

const baristaClient = new PrismaClientBarista({
  log: ['error', 'query', 'info'],
})

const cafeinsClient = new PrismaClientCafeins({
  log: ['error', 'query', 'info'],
})

export { baristaClient, cafeinsClient }
