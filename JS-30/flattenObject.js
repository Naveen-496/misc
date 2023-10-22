var flattenObject = function (obj, n) {
  const result = {};  // empty object which is like a map that doesn't allow duplicate keys  but it can allow duplicate values

  function helper(obj, depth) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && depth < n) {
        helper(obj[key], depth + 1);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

  return helper(obj, 0);
};

const obj = {
  name: "Naveen",
  age: "25",
  sal: { gross: 20000, net: 15000 },
  address: {
    city: { cityName: "maski" },
    pin: 12345,
  },
};
console.log(flattenObject(obj, 2));
