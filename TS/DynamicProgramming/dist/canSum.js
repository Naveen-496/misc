const canSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (const num of numbers) {
    const remainderTarget = targetSum - num;

    if (canSum(remainderTarget, numbers)) {
      return true;
    }
  }

  return false;
};


const canSumM = (targetSum, numbers, memo = {} ) => {
   
  if( targetSum in memo ) return memo[targetSum];

  if( targetSum === 0 ) return true;
 // if( targetSum < 0 ) return false;

  for( const num of numbers ) {

    const remainderTarget = targetSum - num;

    if( num > targetSum ) {
      continue;
    }
     if( canSumM( remainderTarget, numbers, memo) === true ) {
        memo[remainderTarget] = true;
        return true;
     }
  }
    memo[targetSum] = false;
    console.log(memo);
    return memo[targetSum];
}


console.log( canSumM( 300, [7, 14]));