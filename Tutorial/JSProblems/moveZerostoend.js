
function moveZerosToEnd(arr){
   
  let left = 0;
  let right = arr.length-1;

  while( left < right){
    if( arr[left] === 0 && arr[right] !== 0){
      arr[left] = arr[right];
      arr[right] = 0;
      left++;
      right--;
    }
    else{
      left++;
    }
  }
}

const arr = [0, 1, 0, 2, 3];
moveZerosToEnd(arr);
console.log(arr);