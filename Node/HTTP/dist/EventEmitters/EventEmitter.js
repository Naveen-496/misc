"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmitter {
    constructor() {
        this.eventMap = {};
    }
    subscribe(event, cb) {
        if (!this.eventMap[event]) {
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(cb);
        return (event) => {
            this.eventMap[event].delete(cb);
        };
    }
    once(event, cb) {
        if (this.eventMap[event]) {
            return;
        }
        else {
            this.eventMap[event] = new Set();
        }
        this.eventMap[event].add(((event, cb) => {
            cb();
            this.eventMap[event].delete(cb);
        }).bind(this, event, cb));
    }
    emit(event, args = []) {
        var _a;
        ((_a = this.eventMap[event]) !== null && _a !== void 0 ? _a : []).forEach((cb) => cb(...args));
    }
}
const emitter = new EventEmitter();
emitter.subscribe("event1", (a) => {
    console.log(a);
});
emitter.once("once", () => {
    console.log("Only Once");
});
emitter.emit("event1", ["Hi", "Hello"]);
emitter.emit("event1", ["Hi", "Hello"]);
emitter.emit("event1", ["Hi", "Hello"]);
emitter.emit("once", ["Hi", "Hello"]);
emitter.emit("once", ["Hi", "Hello"]);
emitter.emit("once", ["Hi", "Hello"]);
