

function firstOccurrence(arr, target, n) {
  let [low, high, first] = [0, n - 1, -1];

   while(low <= high) {
      const mid = Math.floor((low + high) / 2);
      if(arr[mid] === target) {
        // to find the first occurrence go left side
        first = mid;
        high = mid - 1;
      } else if(arr[mid] < target) {
         // go right side
         low = mid + 1;
      } else {
        high = mid - 1;
      }
   }
   return first;
}

function lastOccurrence(arr, target, n) {
  console.log("finding last occurrence");
  let [low, high, last] = [0, n - 1, -1];
  
  while(low <= high) {
     const mid = Math.floor((low + high) / 2);
     if(arr[mid] === target) {
      last = mid;
      low = mid + 1;
     } else if(arr[mid] < target) {
       low = mid + 1;
     } else {
      high = mid - 1;
     }

  }
  return last;
}


function findFirstAndLast(arr, target, n) {
   const first = firstOccurrence(arr, target, n);
   if(first === -1) return [-1, -1];
   else if(first == n - 1) return [first, first];
   else return [first, lastOccurrence(arr, target, n)];
}


const nums = [2, 3, 4, 5];
const target = 2;
const n = nums.length;
console.log(findFirstAndLast(nums, target, n));