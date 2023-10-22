const binaryRec = (arr, low, high, target) => {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (target > arr[mid]) {
    return binaryRec(arr, mid + 1, high, target);
  } else {
    return binaryRec(arr, low, mid - 1, target);
  }
};

function binarySearchRec(arr, target) {
   return binaryRec(arr, 0, arr.length, target);
}

function binarySearch(arr, target, n) {
  let [low, high] = [0, n - 1];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 1;
console.log(binarySearchRec(nums, target));
