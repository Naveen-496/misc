class Factorial {
  constructor() {}

  factorial = (n: number): void => {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
      fact *= i;
    }
    console.log(fact);
  };
}

const factorial: Factorial = new Factorial();
factorial.factorial( 6 );
