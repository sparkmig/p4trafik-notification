const { notificationClient } = require('./notification/client');
const LoggingFactory = require('./logging/factory').default

const USER_KEY = process.env.PUSHOVER_USER_KEY;

const logger = LoggingFactory.instance.createLogger('file');

const onError = (error) => {    
    logger.error(JSON.stringify(error));
};

const newPost = (event) => {
    logger.info(`Received message: ${event.data}`);
    const { text } = JSON.parse(event.data);

    notificationClient.sendNotification(USER_KEY, {
        title: "New traffic update",
        message: text
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