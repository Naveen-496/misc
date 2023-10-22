
function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
  return items.map( item => item[key]);
}

const dogs = [
  {name: "Tommy", age: 12},
  { name: "Gabby", age: 10},
  {name: "Sabby", age: 15, dob: "2-10-2020"}
];

// console.log( pluck( dogs, "name"));
// console.log( pluck( dogs, "age"));
// console.log( pluck( dogs, "dob"));


interface BaseEvent {
  timer: number;
  name: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string};
  checkOut: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>( name: Name, data: EventMap[Name]): void {

    console.log([name, data]);
}

sendEvent("addToCart", {timer: 20, name: "Naveen", quantity: 25, productId: "12345"});