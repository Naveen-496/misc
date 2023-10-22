class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val, { stack, minStack } = this) {
    stack.push(val);

    const isMinEmpty = !minStack.length;
    const newMin = val <= this.top(minStack);
    const canAddMin = isMinEmpty || newMin;

    if (canAddMin) minStack.push(val);
  }

  pop({ stack, minStack } = this) {
    const top = stack.pop();

    const canMinPop = top === this.getMin();
    if (canMinPop) minStack.pop();
  }

  getMin(minStack = this.minStack) {
    return this.top(minStack);
  }

  top(stack = this.stack) {
    return stack.length ? stack[stack.length - 1] : null;
  }

  printValues() {
    console.log("Stack values are : ", this.stack);
    console.log("MinStack values are : ", this.minStack);
  }
}

const stack = new MinStack();
stack.push(5);
stack.push(10);

stack.printValues();
