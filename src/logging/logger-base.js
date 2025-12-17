
class LoggerBase {
    _log(message, loglevel) {};
    error(message) {
        this._log(message, 'error');
    };
    info(message) {
        this._log(message, 'info');
    };
    debug(message) {
        this._log(message, 'debug');
    }
    warning(message) {
        this._log(message, 'warning');
    }
}

exports.default = LoggerBase;