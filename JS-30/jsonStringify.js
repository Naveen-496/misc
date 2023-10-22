var jsonStringify = function (object) {
  // null or undefined
  if (object === null || object === undefined) {
    return String(object);
  }

  // Arrays
  if (Array.isArray(object)) {
    const values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }

  // objects
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map(
      (key) => `{"${key}" : ${jsonStringify(object[key])}}`
    );
    return keyValuePairs.join(",");
  }

  if (typeof object === "string") {
    return `${String(object)}`;
  }

  return String(object); // numbers or booleans
};

const arr = [{ a: 2, b: 4 }, 3, 5, 8];
const obj = {name: "shiva", id: "1123"};
console.log(jsonStringify(obj));
console.log(jsonStringify(arr));
