"use strict";
const loggedInUser = (obj) => {
    let isOnline = true;
    return Object.assign(Object.assign({}, obj), { online: isOnline });
};
let updatedUser = loggedInUser({ name: "Naveen", age: 25 });
console.log(updatedUser.online);
