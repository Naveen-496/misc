import java.util.HashMap;
import java.util.Map;

public class MinSummingSquares {

    public static int minSummingSquares( int n ) {
         return (int) _minSummingSquares(n, new HashMap<>());
    }

    public static double _minSummingSquares(int n, Map<Integer, Double> memo) {

         if( n == 0 ) return 0;

         if( memo.containsKey( n )) return memo.get( n );

         double minSquares = Double.POSITIVE_INFINITY;
         for ( int i = 1; i <= Math.sqrt( n ); i++ ) {
             int square = i * i;
             double numSquares = 1 + _minSummingSquares(n - square, memo);
             if( numSquares < minSquares ) {
                 minSquares = numSquares;
             }
         }
         double result = minSquares;
         memo.put( n , result );
         return minSquares;
    }

    public static void main(String[] args) {
        System.out.println( minSummingSquares( 12 ));
    }
}
