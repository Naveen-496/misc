function splitN(N: number): void {
  let count = 0;
  while (N > 0) {
    if (N % 2) {
      count++;
    }
    N = Math.floor(N / 2);
  }
  console.log(count - 1);
}

function testSplit() {
  const input = [3, 4, 15];
  //  for( let i = 0; i < input.length; i++ ) {
  //    splitN( input[i]);
  //  }

  for (let i in input) {
    splitN(input[i]);
  }
}

testSplit();
