const { notificationClient } = require('./notification/index');
const LoggingFactory = require('./logging/factory').default
const USER_KEY = process.env.PUSHOVER_USER_KEY;
const logger = LoggingFactory.getInstance().createLogger('file');

const onError = (error) => {    
    logger.error(JSON.stringify(error));
};

const newPost = (event) => {
    logger.info(`Received message: ${event}`);
    
    notificationClient.sendNotification(USER_KEY, {
        title: "New traffic update",
        message: `Something happend `
    });
};

const onOpen = (event) => {
    logger.info("Connection to EventSource opened.");
}

module.exports = {
    onError,
    newPost,
    onOpen,
};