"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class MyEmitter extends stream_1.EventEmitter {
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
