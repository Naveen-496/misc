function nextPermutation(arr) {
  // find the index of the element to the right that is smaller than its next element
  let i = arr.length - 2;

  while (i >= 0 && arr[i] > arr[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Find the index of the smallest element to the right of i that is greater than arr[i]

    let j = arr.length - 1;
    while (j >= 0 && arr[i] > arr[j]) {
      j--;
    }

    // Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Reverse the subarray to the right of i

  let left = i + 1;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const arr = [2, 3, 1, 7, 6];

console.log(nextPermutation(arr));
