export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (n: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const mutationFunction: MutationFunction = (n: number) => n * 100;

console.log(arrayMutate([1, 2, 3, 4], mutationFunction));

type AddTwoNumsFunction = (n1: number, n2: number) => number;

const addTwoNumsFunction: AddTwoNumsFunction = (n1: number, n2: number) =>
  n1 + n2;

function addAllNumsInArray(
  numbers: number[],
  addNums: MutationFunction
): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += addNums(numbers[i]);
  }
  return sum;
}

console.log( addAllNumsInArray([1, 2, 3, 4], mutationFunction));


export function createAdder( num: number): (n: number) => number {
    
   return ( v: number) => num + v;
}
const addOne = createAdder(1);
const addTwo = createAdder(2);
console.log( addOne(100));
console.log( addTwo(10));