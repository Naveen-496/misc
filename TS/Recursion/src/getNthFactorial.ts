

function getNthFactorial ( n: number ): number {

  if( n === 1 ) {
     return 1;
  }

  return n * getNthFactorial( n - 1);
}

console.log( getNthFactorial( 4 ));   // 4 * 3 * 2 * 1 ==> 24

/*
                        24 = 4 * 6                   6 = 3 * 2                     2 = 2 * 1 <--                    1 <--
getNthFactorial( 4 ) ==> 4 * getNthFactorial( 3 ) ==> 3 * getNthFactorial( 2 ) ==> 2 * getNthFactorial( 1 ) ==> returns 1;

time: O(n) as no of function calls are n
space: O(n) every function call takes up the stack space
*/