import { log } from "console";
const sayName = (params) => {
    if (params.last) {
        return `Hello, ${params.first} ${params.last}`;
    }
    return `Hello, ${params.first}`;
};
log(sayName({ first: "Naveen", last: "Reddy" }));
