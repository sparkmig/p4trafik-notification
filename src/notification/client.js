class NotifactionClient {
    #URL = "https://api.pushover.net/1/messages.json";
    #PUSHOVER_APP_TOKEN;

    constructor(PUSHOVER_APP_TOKEN) {
        this.#PUSHOVER_APP_TOKEN = PUSHOVER_APP_TOKEN;
    }
    
    async sendNotification(userKey, {message, title}) {
         await fetch(this.#URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                token: this.#PUSHOVER_APP_TOKEN,
                user: userKey,
                message: message,
                title: title,
                sound: "magic" // Siri-friendly
            })
        });
    }
}

exports.default = NotifactionClient;