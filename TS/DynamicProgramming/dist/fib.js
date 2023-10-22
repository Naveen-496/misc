"use strict";
// memoization 
// js object, keys will be args passed to the function and values will be 
// the results returned by the function call
const fibM = (n, memo = {}) => {
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo);
    return memo[n];
};
const fib = (n) => {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};
console.log(fibM(6));
console.log(fibM(7));
console.log(fibM(8));
console.log(fibM(50));
