
type obj = {
  id: string;
  name: string;
  age: number;
}

type Example = {
  [K in keyof obj]: obj[K] extends string ? K : never;
}[keyof obj];