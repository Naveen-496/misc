

function addAsync(x, y){
   return new Promise((resolve, reject) =>{
     if( x === undefined || y === undefined){
      reject(new Error("Must Provide Valid Parameters"));
     }
     else{
      resolve(x + y);
     }
   })
}
addAsync(2, 3).then(res => console.log(prodAsync(res))).catch(err => console.log(err));

function prodAsync(x){
  return x * x;
}




const abcPromise = Promise.resolve('abc');

console.log( Promise
  .resolve(abcPromise) === abcPromise);

