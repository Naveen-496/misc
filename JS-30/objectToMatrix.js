var objectToMatrix = function (arr) {
  const keySet = new Set(); // hashset in js
  for (const ele of arr) {
    getKeys(ele, "");
  }

  const keys = Array.from(keySet).sort();
  const res = [keys]; // matrix where first row is keys;

  for (const obj of arr) {
    const keyToValue = {};
    let row = [];
    getValues(obj, "", keyToValue);  // populate the keyToValue map with actual values
    for (const key of keys) {
      if (key in keyToValue) {
        row.push(keyToValue[key]);
      } else {
        row.push("");
      }
    }
    res.push(row);
  }
  function getKeys(object, path) {
    for (const key in object) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(object[key])) {
        getKeys(object[key], newPath);
      } else {
        keySet.add(key);
      }
    }
  }

  function getValues(object, path, keyToValue) {
    for (const key in object) {
      const newPath = path ? `${path}.${key}` : key;
      if (isObject(object[key])) {
        getValues(object[key], newPath, keyToValue);
      } else {
        keyToValue[key] = object[key];
      }
    }
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  return res;
};

const arr = [
  { a: 1, b: 3 },
  { a: 2, b: 4 },
  { a: 5, b: 6 },
];

const products = [
  { name: "iPhone 12", price: 999, category: "Electronics", available: true, address: {city: "bangalore", pin: 1234} },
  { name: "Samsung Galaxy S21", price: 899, category: "Electronics", available: true },
  { name: "Nike Air Max", price: 129, category: "Fashion", available: false }
];

console.log(objectToMatrix(products));
