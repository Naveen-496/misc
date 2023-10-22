

const LeftRotate = (arr) => {
   
  let leftele = arr[0];

  for( let i  = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr[arr.length - 1] = leftele;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
LeftRotate(arr);
console.log(arr);
