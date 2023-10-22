import { log } from "console";
import { expect, it } from "vitest";

type addTwoNumsArgs = {
   first: number;
   second: number;
}

export const addTwoNums = ( params: addTwoNumsArgs) => {
   return params.first + params.second;
}

// it( "should add two numbers ", () => {
//    expect( 
//      addTwoNums( {first: 2, second: 4 })
//    ).toEqual(6);
// })

 log( addTwoNums( {first: 2, second: 4 }));