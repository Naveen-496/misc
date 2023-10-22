const a = {"a": 1};
const b = [undefined, 2, 3];
const c = "Hi";
const d = undefined;
const e = null;
const f = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);

console.log(a[0]); // indexes will not work for objects
                   // if we try to access the object values
                   // with the help of indexes then we will 
                   // get undefined