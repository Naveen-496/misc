import { log } from "console";

const sayName2 = (first: string, last?: string ) => {
   
   if( last ) {
    return `Hello, ${ first } ${ last }`;
   }
   return `Hello, ${ first }`;
}

log( sayName2( "Naveen"));