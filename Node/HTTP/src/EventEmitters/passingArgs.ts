import { EventEmitter } from "stream";

class MyEmitter extends EventEmitter {}

const myEmitter1 = new MyEmitter();

myEmitter1.on("event", function (a: string, b: string) {
  console.log(a, b);
});

myEmitter1.emit("event", "a", "b", "c", "d");
