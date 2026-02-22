import { mkdirSync } from 'fs';
import * as path from 'path';
import * as winston from 'winston';

const logDir = process.env.LOG_DIR ?? 'logs';
mkdirSync(logDir, { recursive: true });
const logLevel = process.env.LOG_LEVEL ?? 'info';

/**
 * Formato personalizado para consola: legible y con colores
 */
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return `[${timestamp}] ${level}: ${message}${metaStr}`;
  })
);

/**
 * Formato JSON para archivos: estructurado para análisis y reportes
 */
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

export const logger = winston.createLogger({
  level: logLevel,
  defaultMeta: { service: 'selenium-automation' },
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'automation.log'),
      format: fileFormat,
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'errors.log'),
      level: 'error',
      format: fileFormat,
    }),
  ],
});

/**
 * Crea un child logger con contexto adicional (ej: nombre del escenario, página)
 */
export function createLogger(context: Record<string, string>) {
  return logger.child(context);
}
