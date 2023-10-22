class EventEmitter {
  eventMap: { [key: string]: Set<Function> } = {};

  subscribe(event: string, cb: Function): Function {
    if (!this.eventMap[event]) {
      this.eventMap[event] = new Set();
    }
    this.eventMap[event].add(cb);

    return (event: string) => {
      this.eventMap[event].delete(cb);
    };
  }

  once(event: string, cb: Function): void {
    if (this.eventMap[event]) {
      return;
    } else {
      this.eventMap[event] = new Set();
    }

    this.eventMap[event].add(
      ((event: string, cb: Function) => {
        cb();
        this.eventMap[event].delete(cb);
      }).bind(this, event, cb)
    );
  }

  emit(event: string, args: any[] = []) {
    (this.eventMap[event] ?? []).forEach((cb) => cb(...args));
  }
}

const emitter = new EventEmitter();
emitter.subscribe("event1", (a: string) => {
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
