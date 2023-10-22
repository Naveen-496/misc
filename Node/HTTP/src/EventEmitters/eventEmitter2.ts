import { EventEmitter } from "stream";

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter1 = new MyEmitter();
myEmitter1.on("event", () => {
  setTimeout(() => {
    console.log("event registered");
  }, 2000);
});

myEmitter1.on("gich", () => {
  console.log("Gichhed");
});

myEmitter1.emit("event");
myEmitter1.emit("gich");
