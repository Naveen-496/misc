

function leftRotateByD(arr, d){
  while( d > 0){
     
    let lastEle = arr[0];

     for( let i = 0; i < arr.length-1; i++){
      arr[i] = arr[i+1];
     }
     arr[arr.length-1] = lastEle;
     d--;
  }
}

function rightRotateByD(arr, d){
   
  while( d > 0){
    let firstele = arr[arr.length - 1];

    for( let i = arr.length - 1; i > 0; i--){
      arr[i] = arr[i - 1];
    }
    arr[0] = firstele;
    d--;
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
leftRotateByD(arr,2);
console.log(arr);

const arr2 = [5, 4, 3, 2, 1];
console.log(arr2);
rightRotateByD(arr2, 2);
console.log(arr2);