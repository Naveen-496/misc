"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class MyEmitter extends stream_1.EventEmitter {
}
const myEmitter1 = new MyEmitter();
myEmitter1.on("event", function (a, b) {
    console.log(a, b);
});
myEmitter1.emit("event", "a", "b", "c", "d");
