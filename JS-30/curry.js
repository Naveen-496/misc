// functional way

const curryF = function (fn) {
  let nums = [];
  return function curried(...args) {
    nums = [...nums, ...args];

    if (nums.length === fn.length) {
      return fn(...nums);
    } else {
      return curried;
    }
  };
};

// recursice way

const curry = function (fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
};

function sum(a, b, c) {
  return a + b + c;
}

const csum = curry(sum);
console.log(csum(1)(2)(3));
