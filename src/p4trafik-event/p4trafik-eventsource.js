const { EventSource } = require('eventsource');

class P4TrafikEventSource extends EventSource {
    
    constructor(url, options) {
        super(url, options);
        
        this.addEventListener('new-post', (...args) => {
            this.onnewpost?.(...args)
        } );
    }

    onnewpost(event) {};
}

exports.P4TrafikEventSource = P4TrafikEventSource;