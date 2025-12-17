const eventHandlers = require('./src/event-handlers.js');
const { EventSource } = require('eventsource');

const SUBSCRIBE_URL = 'https://api.dr.dk/trafik/subscribe';
let e = null;

function main() {   
    e = new EventSource(SUBSCRIBE_URL);
    e.onerror = eventHandlers.onError;
    e.onmessage = eventHandlers.onMessage;
    e.onopen = eventHandlers.onOpen;
}

function exitHandler(options, exitCode) {
    if (options.cleanup)  {
        e?.close();
    }
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

exports.default = {
    main,
    exitHandler
}