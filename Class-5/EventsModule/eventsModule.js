const EventEmitter = require('events');

//real life emitter nite 
const emitter = new EventEmitter();

//register a listener for Oliul event
//  emitter.on('Oliul',()=>{
//   console.log('This Oliul Alam')
//  });

//register a listener for Oiul event and peramiter pass 
emitter.on('Oliul', (sami)=>{
  console.log(`this a total bad ${sami}`);
});

 //raise an event
//  emitter.emit('Oliul');

 //raise an event 
emitter.emit('Oliul', 'Sami a is a bad')