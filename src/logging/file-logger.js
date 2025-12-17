const fs = require('fs');
const path = require('path');
const LoggerBase = require('./logger-base.js').default;

class FileLogger extends LoggerBase {
    #filepath;
    #logDir;

    constructor() {
        super();
        // Set paths relative to project root
        this.#logDir = path.join(__dirname, '..', '..', 'logs');
        this.#filepath = path.join(this.#logDir, 'application.log');
        
        // Create logs directory if it doesn't exist
        try {
            if (!fs.existsSync(this.#logDir)) {
                fs.mkdirSync(this.#logDir, { recursive: true });
            }
        } catch (err) {
            console.error('Error creating logs directory:', err);
        }
    }

    _log(message, loglevel) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${loglevel.toUpperCase()}]: ${message}\n`;
        
        try {
            fs.appendFileSync(this.#filepath, logMessage);
        } catch (err) {
            console.error('Error writing to log file:', err);
        }
    }
}

exports.default = FileLogger;