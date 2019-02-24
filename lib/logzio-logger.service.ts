import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { LOGZIO_LOGGER_MODULE_OPTIONS } from './logzio-logger.constants';
import { LogzioLoggerModuleOptions } from './logzio-logger-options.interface';

@Injectable()
export class LogzioLogger implements LoggerService {
  private transport: any;
  private logger: any;

  constructor(
    @Inject(LOGZIO_LOGGER_MODULE_OPTIONS)
    private readonly options: LogzioLoggerModuleOptions,
  ) {}

  public init() {
    const winston = require('winston');
    const logzioWinstonTransport = require('winston-logzio');
    this.transport = new logzioWinstonTransport(this.options);
    winston.add(this.transport);
    winston.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    );
    this.logger = winston;
  }

  error(message: any, trace?: string, context?: string): any {
    if (this.logger) {
      this.logger.log('error', message);
    } else {
      console.log(message);
    }
  }

  warn(message: any, context?: string): any {
    if (this.logger) {
      this.logger.log('error', message);
    } else {
      console.log(message);
    }
  }

  log(message: any, context?: string): any {
    if (this.logger) {
      this.logger.log('info', message);
    } else {
      console.log(message);
    }
  }
}
