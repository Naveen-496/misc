package fib;

import java.util.HashMap;
import java.util.Map;

public class Fibonacci {

    public static int fib( int n ) {
        return fib( n, new HashMap<>());
    }

    private static int fib(int n, Map<Integer, Integer> memo) {
        if( n == 0 || n == 1 ) return n;
        if( memo.containsKey( n )) return  memo.get( n );
        memo.put( n, fib( n - 1, memo) + fib( n - 2, memo ));
        return memo.get( n );
    }

    public static void main(String[] args) {
        System.out.println( fib( 6 ));
    }
}
