Array.prototype.groupBy = function (fn) {
  const res = {};

  for (const obj of this) {
    const key = fn(obj);
    console.log(key);
    // if (!res.hasOwnProperty(key)) {
    //   res[key] = [];
    // }

    res[key] = res[key] || [];
    res[key].push(obj);
  }
  return res;
};

const arr = [{ id: 1 }, { id: 1 }, { id: 2 }];
console.log(
  arr.groupBy(function (item) {
    return item.id;
  })
);
