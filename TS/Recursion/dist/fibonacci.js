"use strict";
function fib(n) {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));
/*

                              3 + 2 = 5   fib( 5 )
                                          /     \
                                         /       \    2
                            2 + 1 = 3 fib( 4 )   fib( 3 )  subproblem
                                      /\             /\
                                 2   /  \  1        /  \
                                    /    \         /    \
                1 + 1 = 2   fib( 3 )  fib(2)  fib(2 )  fib( 1 )
                                /\
                             1 /  \ 1
                              /    \
                      fib( 2 )     fib9( 1 )

*/
