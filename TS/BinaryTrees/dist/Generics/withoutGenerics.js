"use strict";
const myArray = [{ id: 123, name: "Naveen" }, { id: 111, name: "Reddy" }];
const newPropertyKey = "city";
const newPropertyValue = "maski";
const newPropertyAddition = myArray.map((obj) => (Object.assign(Object.assign({}, obj), { [newPropertyKey]: newPropertyValue })));
console.log(newPropertyAddition);
// now if i want to add add a new property that is of type then i have to create 
// another function to accept that key and value
