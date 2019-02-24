# NestJs-Logzio-Logger

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
