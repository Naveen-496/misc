// the laegest no in the array which is less than the taeget element

const nums = [10, 15, 20, 25, 30, 40, 50];
const target = [22];

// the largest number less than the given target is 20

function floorElement(arr, target, n) {
  let [low, high, ans] = [0, n - 1, -1];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      // we'll go left bcoz we may still get the smallest number than the current no
      low = mid + 1;
      ans = arr[mid];
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

console.log(floorElement(nums, target, nums.length));
