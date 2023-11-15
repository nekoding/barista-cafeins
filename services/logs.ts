import type { PrismaClient } from '../prisma/barista/barista-client'
import { baristaClient } from '../utils/database'

export enum LogLevel {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn',
}

export const writeToLog = async (
  level: LogLevel,
  message: string,
  meta?: object,
  client: PrismaClient = baristaClient,
): Promise<void> => {
  await client.log.create({
    data: {
      level,
      message,
      meta,
    },
  })
}
