function add(...args) {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
}

function memoize(fn) {
  const cache = {}; // create a hashmap to store the result

  return function (...args) {
    const key = JSON.stringify(...args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const fn = memoize(add);
console.log(fn(5, 5, 5));
console.log(fn(5, 5, 5));
