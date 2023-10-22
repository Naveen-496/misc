// smallest element in the array which is greater than the target
const nums = [10, 20, 30, 40, 50, 60];
const target = 35;

// so the smallest number that is greater than the given target is 40;

function celiElement(arr, target, n) {
  let [low, high, ans] = [0, n - 1, -1];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(celiElement(nums, target, nums.length));
