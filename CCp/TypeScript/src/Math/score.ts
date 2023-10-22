
// X is the total points for the problem
// A Problem consists of 10 testcases
// Y is the testcases chef has passed

function chefPoints ( X: number, Y: number ) {

  const pointsForEachTestCase: number = ( X / 10 );
  console.log( pointsForEachTestCase );
  console.log( Y * pointsForEachTestCase );
}

chefPoints( 130, 4);