import { PrismaClient as PrismaClientBarista } from './prisma/barista/barista-client'
import { PrismaClient as PrismaClientCafeins } from './prisma/cafeins/cafeins-client'


const barista_client = new PrismaClientBarista({
    log: ['error', 'query', 'info']
})

const cafeins_client = new PrismaClientCafeins({
    log: ['error', 'query', 'info'],
})
