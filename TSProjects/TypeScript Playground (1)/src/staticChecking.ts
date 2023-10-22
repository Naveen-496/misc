
function range( from: number, to: number): number[];

function range(from: unknown, to: unknown): number[] {
  const result: number[] = [];
  if (typeof from !== "number" || typeof to !== "number") {
    throw new Error(" range() expects exactly two number arguments ");
  }

  for (let i = from; i < to; i++) {
    result.push(i);
  }

  return result;
}

const results = range(0, 5);
console.log(results);
