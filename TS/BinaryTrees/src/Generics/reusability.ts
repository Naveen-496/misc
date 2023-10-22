
const convertStringToArray = ( value: string ): Array<string> => {
   return [value];
}

const convertNumberToArray = ( value: number ): Array<number> => {
   return [value];
}

const convertObjectToArray = ( value: object ): Array<object> => {
   return [value];
}

// console.log(convertObjectToArray({name: "Reddy"}));

// generics to the rescue
const convertAllTypesToArray = <T>( arg: T ): Array<T> => {
   return [arg];
}

console.log(convertAllTypesToArray("Naveen"));
console.log(convertAllTypesToArray(true));
console.log(convertAllTypesToArray(20));
console.log(convertAllTypesToArray({id: 1234, name: "reddy"}));
