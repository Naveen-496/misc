


function makeDouble( n: number, numbers: number[] ): void {
     
  if( n === numbers.length ) {
    return;
  }

  numbers[n] = 2 * numbers[n];
  makeDouble( ++n, numbers);
}

const numbers = [2, 3, 4, 5];
makeDouble( 0, numbers );
console.log( numbers );
