Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  }
  return -1;
};

// console.log(Object.getOwnPropertyNames(Array.prototype));

const arr = [];
console.log(arr.last());
