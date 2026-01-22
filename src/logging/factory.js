const { ConsoleLogger } = require('./console-logger.js');
const FileLogger = require('./file-logger.js').default;

class LoggingFactory {
  createLogger(loggerType) {
    
    switch (loggerType) {
        case 'file':
            return new FileLogger();
        case 'console':
            return new ConsoleLogger();
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