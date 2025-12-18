const FileLogger = require('./file-logger.js').default;

class LoggingFactory {
  createLogger(loggerType) {
    let logger;
    
    switch (loggerType) {
        case 'file':
            return new FileLogger();
        case 'console':
            return console;
        default:
            throw new Error(`Unknown logger type: ${loggerType}`);
    }
  }

  static #instance;

  static get instance() {
     if (!LoggingFactory.#instance) {
      LoggingFactory.#instance = new LoggingFactory();
    }
    return LoggingFactory.#instance;
  }
}

exports.LoggingFactory = LoggingFactory;