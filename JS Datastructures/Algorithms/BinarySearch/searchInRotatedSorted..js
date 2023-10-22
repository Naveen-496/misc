function searchInRotated(arr, target, n) {
  let [low, high] = [0, n - 1];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

const nums = [15, 14, 13, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
const target = 9;
const n = nums.length;
console.log(searchInRotated(nums, target, n));