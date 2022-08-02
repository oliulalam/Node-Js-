const EventEmitter = require('events');

const emitter = new EventEmitter();

const School = require('../EventsModule/events');

const school = new School();

//register a listener for Oiul event and peramiter pass 
school.on('Oliul', (sami)=>{
    console.log(`this a total bad ${sami}`);
  });

  school.StartPriod();