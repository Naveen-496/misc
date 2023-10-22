"use strict";
const convertStringToArray = (value) => {
    return [value];
};
const convertNumberToArray = (value) => {
    return [value];
};
const convertObjectToArray = (value) => {
    return [value];
};
// console.log(convertObjectToArray({name: "Reddy"}));
// generics to the rescue
const convertAllTypesToArray = (arg) => {
    return [arg];
};
console.log(convertAllTypesToArray("Naveen"));
console.log(convertAllTypesToArray(true));
console.log(convertAllTypesToArray(20));
console.log(convertAllTypesToArray({ id: 1234, name: "reddy" }));
