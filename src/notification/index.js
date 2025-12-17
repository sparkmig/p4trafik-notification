const NotifactionClient = require('./client.js').default;

const notificationClient = new NotifactionClient(process.env.PUSHOVER_APP_TOKEN);
exports.notificationClient = notificationClient;