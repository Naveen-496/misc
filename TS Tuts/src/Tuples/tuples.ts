type ThreeDCoordinate = [x: number, y: number, z: number];

function add3dCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

// console.log(add3dCoordinate([1, 1, 1], [2, 2, 2]));

function simpleStringState(value: string): [() => string, (v: string) => void] {
  let str = value;
  return [() => str, (v: string) => (str = v)];
}

// const [state, setState] = simpleStringState("Hi");
// console.log(state());
// setState("Hello");
// console.log(state());

type State<T> = [() => T,(newValue: T) => void];

function useState<T>(initialValue: T): State<T> {
  let value: T = initialValue;

  return [() => value, (newValue: T) => (value = newValue)];
}


const [ state, setState] = useState(0);
console.log( state() );
setState(10);
console.log(state());