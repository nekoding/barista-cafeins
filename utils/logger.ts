import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const loggerTransports =
  process.env.NODE_ENV?.toLocaleLowerCase() === 'debug'
    ? [
        new transports.Console(),
        new DailyRotateFile({
          filename: `${import.meta.dir}/../logs/%DATE%.log`,
        }),
      ]
    : [
        new transports.Console(),
        new DailyRotateFile({
          filename: `${import.meta.dir}/../logs/%DATE%.log`,
        }),
      ]

// setup logger
export const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      (info) => `[${info.timestamp}] [${info.level}] ${info.message}`,
    ),
  ),
  transports: loggerTransports,
})
