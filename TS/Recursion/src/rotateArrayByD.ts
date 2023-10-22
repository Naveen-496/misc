


function rotateArrayByD( nums: number[], d: number ): void {
     
  if( d === 0 ) {
   return;
  }

  const temp = nums.pop()!;
  nums.unshift( temp );
  rotateArrayByD( nums, --d);
}

const numbs = [2, 3, 4, 5];
const d = 4;
rotateArrayByD( numbs, d);
console.log( numbs );
