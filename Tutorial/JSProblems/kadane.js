
function kadaneAlgorithm(arr){

  currSum = arr[0];
  maxSum = arr[0];

  for( let i = 1; i < arr.length; i++){
    currSum = Math.max(arr[i] , currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

 console.log(kadaneAlgorithm([0, 1, 2,-5, 3, -1, -1, -2, 10]));