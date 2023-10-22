
// lower bound is the smallest index such that arr[index] >= target

function lowerBound(arr, target, n) {
  let [low, high] = [0, n - 1];
  let ans = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // fotgot to return the value
  return ans;
}

const nums = [1, 2, 4, 4, 5, 6, 7, 8, 9];
const target = 4;
console.log(lowerBound(nums, target, nums.length));
