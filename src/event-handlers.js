const { notificationClient } = require('./notification/index');

const USER_KEY = process.env.PUSHOVER_USER_KEY;

const onError = (error) => {    
    console.error("EventSource failed:", error);
   
};

const onMessage = (event) => {
    console.log("New message received:", event);
    console.log("JSON:", JSON.parse(event));
    
    notificationClient.sendNotification(USER_KEY, {
        title: "EventSource Error",
        message: `An error occurred: `
    });
};

const onOpen = (event) => {
    console.log("Connection to EventSource opened.", event);
}

module.exports = {
    onError,
    onMessage,
    onOpen,
};