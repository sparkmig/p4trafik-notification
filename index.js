const {main, exitHandler} = require('./main.js').default;

main();

// do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true, cleanup:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true, cleanup:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true, cleanup:true}));

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true, cleanup:true}));