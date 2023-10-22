export default function sum(...nums: number[]): number {
  return nums.reduce((total, number) => total + number, 0);
}
