
const EventEmitter = require('events');

// create a Emitter class
class MyEmitter extends EventEmitter {}

// init EventEmitter Object

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {console.log('Event has been fired')});

myEmitter.emit('event');