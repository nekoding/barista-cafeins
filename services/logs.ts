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
): Promise<void> => {
  await baristaClient.log.create({
    data: {
      level,
      message,
      meta,
    },
  })
}
