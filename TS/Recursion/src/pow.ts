
function pow ( x: number, n: number ): number {
    
  let nn = n;
  let ans = 1.0;
  if( nn < 0 ) nn = -1 * nn;
  while( nn > 0 ) {
    
     if( nn % 2 === 1 ) {
       ans = ans * x;
       nn = nn - 1;
     } else {
      x = x * x;
      nn = nn / 2;
     }
     nn = Math.floor( nn );
  }
  if( n < 0 ) ans = 1 / ans;
  return ans;
}

console.log(pow(2, -3));