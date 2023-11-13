import { PrismaClient as PrismaClientBarista } from '../prisma/barista/barista-client'
import { PrismaClient as PrismaClientCafeins } from '../prisma/cafeins/cafeins-client'

const baristaClient = new PrismaClientBarista({
  log: ['error', 'info', 'warn'],
})

const cafeinsClient = new PrismaClientCafeins({
  log: ['error', 'info', 'warn'],
})

export { baristaClient, cafeinsClient }
