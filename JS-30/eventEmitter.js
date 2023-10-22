
class EventEmitter {
  eventMap = {};
  
  subscribe(event, cb) {
      // check if that event has already added
      if(!this.eventMap.hasOwnProperty(event)) {
          this.eventMap[event] = new Set();
      }
      this.eventMap[event].add(cb);
      
      return {
          unsubscribe() {
              this.eventMap[event].delete(cb);
          }
      }
  }
  
  emit(event, args = []) {
      const result = [];
      (this.eventMap[event] ?? []).forEach(cb => result.push(cb(...args)));
  }
}

const emitter = new EventEmitter();
emitter.subscribe('onClick', onCallbackClick);
emitter.subscribe('onClick', onSecondCallback);
emitter.emit('onClick', "Naveen");
function onCallbackClick() {
  console.log("called callback");
  return 100;
}

function onSecondCallback(name) {
  console.log(`Hello from ${name}`);
}