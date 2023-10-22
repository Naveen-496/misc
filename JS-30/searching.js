function binarySearch(arr, k) {
  const [left, right] = [0, arr.length - 1];
  return binary(left, right, arr, k);

  function binary(left, right, arr, target) {
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    if (guess === target) {
      return target;
    }

    if (guess > target) {
      return binary(left, mid - 1, arr, target);
    } else {
      return binary(mid + 1, right, arr, target);
    }
  }
}

function linearSearch(arr, k) {
  for (const val of arr) {
    if (val === k) {
      return true;
    }
  }
  return false;
}

function search(arr, k, isSorted) {
  return isSorted ? binarySearch(arr, k) : linearSearch(arr, k);
}

const nums = [1, 2, 5, 10];
const k = 10;
console.log(search(nums, k, true));
