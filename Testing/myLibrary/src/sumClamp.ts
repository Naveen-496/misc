export function sumClamp(numbers: number[], clamp:number): number {
   const sum = numbers.reduce( function( previousValue, currentValue) {
       return previousValue + currentValue;
   }, 0)
   return sum;
}