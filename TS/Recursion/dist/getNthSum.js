"use strict";
function getNthSum(n) {
    if (n === 1) {
        return 1;
    }
    return n + getNthSum(n - 1);
}
console.log(getNthSum(3));
/*
          6 <--                      3  <--               1 <--                 <-- 1
  getNthSum( 3 ) ---> 3 + getNthSum( 2 ) ---> 2 + getNthSum( 1 ) ---> if( n === 1 ) return 1;

  time: O(n) --> each digit calls the function again
  space: O(n) --> every function call takes up the call stack space in the background
  
 */
