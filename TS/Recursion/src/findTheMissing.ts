
function findTheMissing ( nums: number[] ): number {
   
   nums.sort();
   for( let i = 0; i < nums.length; i++ ) {
     if ( i + 1 !== nums[i] ) {
       return i + 1;
     }
   }
   return -1;
}

const arr = [3, 2, 4 ];

function findMissing( nums: number[] ): number {

   const n = nums.length;

   let sum = Math.floor(( n + 1 ) * ( n + 2 ) / 2);
   for( let i = 0; i < nums.length; i++ ) {
    sum -= nums[i];
   }

   return  sum;
}



function findMissingRec( nums: number[], n: number ): number {

  if( n === nums.length ) {
    return n + 1;
  }
  if( n + 1 !== nums[ n ]) {
    return n + 1;
  }
  return findMissingRec( nums, ++n);
}

const nams = [1,2, 3];
console.log( findMissingRec(nams, 0));





console.log( findMissing( arr ));