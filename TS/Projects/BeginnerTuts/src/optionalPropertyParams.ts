import { log } from "console";


const sayName = ( params: { first: string , last?: string }) => {
    if( params.last ) {
      return `Hello, ${params.first} ${params.last}`;
    }
    return `Hello, ${params.first}`;
}

log( sayName({first: "Naveen", last: "Reddy"}));