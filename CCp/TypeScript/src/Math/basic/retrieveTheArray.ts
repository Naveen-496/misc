function retrieveOriginalArray(arr: number[]): void {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  sum /= ( arr.length + 1);
  let res = "";
  for (let i in arr) {
    res += (arr[i] - sum) + " ";
  }
  console.log(res);
}

function newArrayExtractor() {
  let arrs = [[6], [7, 8, 9], [13, 15, 13, 14], [25, 20]];
  for (let i in arrs) {
    retrieveOriginalArray(arrs[i]);
  }
}

newArrayExtractor();
