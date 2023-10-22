

class Pair<U, V> {
   
   readonly first: U
   readonly second: V

   private constructor( first: U, second: V) {
     this.first = first;
     this.second = second;
   }

   static  of<U, V>(a: U, b: V ): Pair<U, V> {
     
    return new Pair(a, b);
   }
}

export default Pair;

console.log(Pair.of<number, number>(2, 3).first);

