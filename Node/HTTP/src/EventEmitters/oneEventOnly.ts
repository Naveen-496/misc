import { EventEmitter } from "stream";


class MyEmitter extends EventEmitter {};

const emitter = new MyEmitter();
let m = 0;

emitter.once("eve", () => {
  console.log(++m);
});
// using emitter.once() we can emit only once 
// and after finishing it  will automatically deregister that listener
emitter.emit("eve");
emitter.emit("eve");