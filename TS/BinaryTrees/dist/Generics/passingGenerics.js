"use strict";
function genericsArgs(arg) {
    console.log(typeof arg);
    return [arg];
}
console.log(genericsArgs(22));
console.log(genericsArgs("hello"));
console.log(genericsArgs(true));
console.log(genericsArgs({ id: 111, name: "Naveen" }));
console.log(genericsArgs({ data: { id: 111, name: "Naveen" } }));
