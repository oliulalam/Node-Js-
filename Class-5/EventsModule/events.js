const EventEmitter = require('events');

class School extends EventEmitter{

    StartPriod() {

    console.log('class is start');

     setTimeout(() => {
        this.emit('Oliul', 'Sami a is a bad');
     }, 2000);
    
    }
}

module.exports = School;