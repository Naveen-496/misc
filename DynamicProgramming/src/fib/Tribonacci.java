package fib;

import java.util.HashMap;
import java.util.Map;

public class Tribonacci {

    public static long trib( long n ) {
        return trib( n, new HashMap<>());
    }

    public static long trib(long n, Map<Long, Long> memo ) {
        if( n == 0 || n == 1) return 0;
        if( n == 2 ) return 1;
        if( memo.containsKey( n )) return  memo.get( n );

       long result = trib( n - 1, memo) + trib( n - 2, memo ) + trib( n - 3, memo);
       memo.put( n , result );
       return result;
    }

    public static int tribR( int n ) {
        if( n == 0 || n == 1) return  0;
        if( n == 2 ) return  1;

        return tribR( n - 1) + tribR( n - 2) + tribR( n - 3);
    }

    public static void main(String[] args) {
        System.out.println( trib( 1000 ));
    }
}
