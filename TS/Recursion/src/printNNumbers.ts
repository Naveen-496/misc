

function printNNumbers( n: number ): void {
  if( n < 1 ) {
    return;
  }

  printNNumbers( n - 1 );
  console.log( n );
  // implicitly there is a return statement
}

printNNumbers( 5 );

/*   

first the recursive calls will be made until it hits the base case 
and then when the recursive calls the it prints the current value of n and 
returns to the caller function


                              f( 3 )  logs 3
                                |
                              f(2) logs 2
                                |
                              f( 1 )  logs 1
                                |   
                              f( 0 ) returns   

*/