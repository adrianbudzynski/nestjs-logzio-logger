# NestJs-Logzio-Logger

<p align="center">
    <a href="https://www.npmjs.com/~adrianbudzynski"><img src="https://img.shields.io/npm/v/nestjs-logzio-logger.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~adrianbudzynski"><img src="https://img.shields.io/npm/l/nestjs-logzio-logger.svg" alt="Package License" /></a>
    <a href="https://travis-ci.org/adrianbudzynski/nestjs-logzio-logger"><img src="https://travis-ci.org/adrianbudzynski/nestjs-logzio-logger.svg?branch=master" alt="Travis" /></a>
    <a href="https://twitter.com/adrian_budzynsk"><img src="https://img.shields.io/twitter/follow/adrian_budzynsk.svg?label=Follow"></a>
</p>

Integration with cloud ELK Stack provider (logz.io) used as a log storage that provides additional possibilities as tracking and analysing logs. Especially useful in distributed environments. 

### Installing

```
npm install nestjs-logzio-logger --save
```

Add to the AppModule in import section

```
LogzioLoggerModule.forRoot({
      token: '<TokenFromYourLogzIOProject>',
      host: 'listener.logz.io',
      type: 'job-worker',
      debug: true,
    }),
```

Here you can find your token: https://app.logz.io/#/dashboard/settings/general 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
