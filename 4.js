const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.once('oneTimeEvent', () => {
  console.log('This event was handled only once!');
});


emitter.emit('oneTimeEvent');
emitter.emit('oneTimeEvent');  
