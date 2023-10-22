

function secondLargest(arr){

  let firstLargest = 0;
  let secondLargest = 0;

  for( let i = 0; i < arr.length; i++){

    if( arr[i] > firstLargest ){
      secondLargest = firstLargest;
      firstLargest = arr[i];
      
    }
   else if( arr[i] > secondLargest && arr[i] != firstLargest){
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([3, 5, 2, 9, 6, 10, -2]));