import { DynamicModule, Global, Logger, Module } from '@nestjs/common';
import { LOGZIO_LOGGER_MODULE_OPTIONS } from './logzio-logger.constants';
import { LogzioLoggerModuleOptions } from './logzio-logger-options.interface';
import { LogzioLogger } from './logzio-logger.service';

@Global()
@Module({})
export class LogzioLoggerModule {
  constructor() {}

  static forRoot(options: LogzioLoggerModuleOptions): DynamicModule {
    return {
      module: LogzioLoggerModule,
      providers: [
        {
          provide: LOGZIO_LOGGER_MODULE_OPTIONS,
          useValue: options,
        },
        {
          provide: Logger,
          useFactory: () => {
            const logger = new LogzioLogger(options);
            logger.init();
            return logger;
          },
        },
      ],
      exports: [Logger],
    };
  }
}
