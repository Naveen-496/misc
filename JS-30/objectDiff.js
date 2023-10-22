var objectDiff = function (o1, o2) {
  // if both are primitives, then diff
  // if one is object and other isin't then diff
  // if one array and other is an object then diff
  // if both are arrays or both are objects then do recursion

  if (!isObject(o1) && !isObject(o2)) {
    // both are primitives
    return o1 === o2 ? {} : [o1, o2];
  }
  if (!isObject(o1) || !isObject(o2)) {
    return [o1, o2]; // one is object and one primitive
  }
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return [o1, o2]; // one array and one object
  }

  // both  are arrays or objects
  let diff = {};

  for (const key of o1) {
    if (o2.hasOwnProperty(key)) {
      const res = objectDiff(o1[key], o2[key]);
      if (Object.keys(res).length > 0) {
        diff[key] = res;
      }
    }
  }

  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  return diff;
};
