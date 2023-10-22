// upper bound is the smallest index such that arr[index] > target

function upperBound(arr, target, n) {
  let [low, high, ans] = [0, n - 1, n];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

const nums = [1, 2, 4, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(upperBound(nums, target, nums.length));