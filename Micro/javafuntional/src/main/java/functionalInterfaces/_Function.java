package functionalInterfaces;

import java.util.function.BiFunction;
import java.util.function.Function;

public class _Function {

    public static void main(String[] args) {
     /*   int increment = increment(0);
        System.out.println( increment );
        int increment2 = incrementByOneFunction.apply( 1 );
        System.out.println( increment2 );
        int multiplyBy10 = multiplyBy10Function.apply( increment2 );
        System.out.println( multiplyBy10 );

        int incrementBy1AndMultiplyBy10 = incrementBy1AndThenMultiplyBy10.apply( 1 );
        System.out.println( incrementBy1AndMultiplyBy10 );
      */

        System.out.println("Bi Functions");
        int incrByOneAndMulBy10 =
                incrementBy1AndThenMultiplyBy.apply( 2, 10);

        System.out.println( incrByOneAndMulBy10 );
    }
    // Functions take one argument and produces one result
    static Function<Integer, Integer> incrementByOneFunction = number -> 1 + number;
    static Function<Integer, Integer> multiplyBy10Function = number -> number * 10;
    static Function<Integer, Integer> incrementBy1AndThenMultiplyBy10 =
            incrementByOneFunction.andThen( multiplyBy10Function);

    // BiFunctions take two arguments and produces one result
    static BiFunction<Integer, Integer, Integer> incrementBy1AndThenMultiplyBy =
            ( numberToIncrementByOne, numberToMultiplyBy) -> ( 1 + numberToIncrementByOne ) * numberToMultiplyBy;
    static int increment( int num ) {
         return 1 + num;
    }

    static int incrementByOneAndMultiplyBy( int numberToIncrementByOne,
                                           int numberToMultiplyBy) {
         return  (1 + numberToIncrementByOne) * numberToMultiplyBy ;
    }
}
