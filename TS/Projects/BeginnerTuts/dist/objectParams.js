import { log } from "console";
export const addTwoNums = (params) => {
    return params.first + params.second;
};
// it( "should add two numbers ", () => {
//    expect( 
//      addTwoNums( {first: 2, second: 4 })
//    ).toEqual(6);
// })
log(addTwoNums({ first: 2, second: 4 }));
