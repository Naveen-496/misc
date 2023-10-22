var chunkArray = function (arr, size) {
  const res = [];

  for (let i = 0; i < arr.length; i += size) {
    console.log("slicing the arr at ", i, i + size);
    res.push(arr.slice(i, i + size));
  }

  // let subarr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   subarr.push(arr[i]);
  //   if (subarr.length === size) {
  //     res.push(subarr);
  //     subarr = [];
  //   }
  // }

  // if (subarr.length) {
  //   res.push(subarr);
  // }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6];
const size = 4;
console.log(chunkArray(arr, size));
