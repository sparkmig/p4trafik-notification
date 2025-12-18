const eventHandlers = require('./src/event-handlers.js');
const { P4TrafikEventSource } = require('./src/p4trafik-event/p4trafik-eventsource.js');

const SUBSCRIBE_URL = 'https://api.dr.dk/trafik/subscribe';
let e = null;

function main() {   
    e = new P4TrafikEventSource(SUBSCRIBE_URL);
    e.onerror = eventHandlers.onError;
    e.onopen = eventHandlers.onOpen;
    e.onnewpost = eventHandlers.newPost;
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