const LoggerBase = require('./logger-base.js').default;

class ConsoleLogger extends LoggerBase {
    constructor() {
        super();
    }

    _log(message, loglevel) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${loglevel.toUpperCase()}]: ${message}\n`;
        console.log(logMessage);
    }
}

exports.ConsoleLogger = ConsoleLogger;