const { notificationClient } = require('./notification/index');
const LoggingFactory = require('./logging/factory').default
const USER_KEY = process.env.PUSHOVER_USER_KEY;
const logger = LoggingFactory.getInstance().createLogger('file');

const onError = (error) => {    
    logger.error(`Received message: ${event.data}`);
};

const onMessage = (event) => {
    logger.info(`Received message: ${event.data}`);
    
    notificationClient.sendNotification(USER_KEY, {
        title: "EventSource Error",
        message: `An error occurred: `
    });
};

const onOpen = (event) => {
    logger.info("Connection to EventSource opened.");
}

module.exports = {
    onError,
    onMessage,
    onOpen,
};