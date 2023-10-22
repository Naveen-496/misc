class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(part, { stack, minStack } = this) {
    stack.push(part);

    const isMinEmpty = !minStack.length;
    const top = this.top(minStack);
    console.log(top);
    const newMin = part.cost <= top ? top.cost : 0;
    const canChangeMin = isMinEmpty || newMin;

    if (canChangeMin) minStack.push(part);
  }

  pop({ minStack } = this) {
    const top = this.stack.pop();

    const canMinPop = top.cost === this.getMin().cost;
    if (canMinPop) minStack.pop();
  }

  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null;
  }

  getMin(stack = this.minStack) {
    return this.top(stack);
  }
}

const parts = [
  {
    id: "1234",
    name: "box",
    open: true,
    cost: 12345,
    closeNumber: "47475",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    cost: 235,
    openNumber: "47475",
  },
  {
    id: "1234",
    name: "box",
    open: true,
    cost: 12455,
    closeNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    cost: 334,
    openNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    cost: 3546,
    openNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    cost: 8787,
    openNumber: "47428",
  },
];

const stack = new MinStack();

for (const part of parts) {
  stack.push(part);
}

console.log(stack.minStack);
