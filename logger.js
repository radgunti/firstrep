const EventEmitter = require('events')

var url = 'http://logger.com/log';
class Logger extends EventEmitter{
    log(message){
        console.log(message);

        //Raise a event
        this.emit('Message Logged', {id:1, url:'http://'})    
    }
}
    
module.exports = Logger;