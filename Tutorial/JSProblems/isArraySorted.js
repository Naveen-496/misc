

function IsSorted(arr){

  if( arr.length === 1)
  return true;
 // console.log(arr.length);

  for( let i = 0; i <= arr.length - 1; i++){
      if(arr[i] > arr[i+1])
      return false;
  }
  return true;
}

// console.log(IsSorted([1, 2, 3]));
export default IsSorted;