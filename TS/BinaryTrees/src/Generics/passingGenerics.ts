
function genericsArgs< T > (arg: T): [T] {
    
   console.log( typeof arg);
   return [arg];
}

interface MyType {
  id: number
  name: string
}

type TData = {
   data: MyType
}

 console.log(genericsArgs<number>(22));
 console.log(genericsArgs<string>("hello"));
 console.log(genericsArgs<boolean>(true));
 console.log(genericsArgs<MyType>({id: 111, name: "Naveen"}));
 console.log(genericsArgs<TData>({data: {id: 111, name: "Naveen"}}));
  