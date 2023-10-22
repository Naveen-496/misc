package easy;

import java.util.ArrayList;
import java.util.List;

public class PascalsTriangle {

    public static int NCR( int n, int r ) {
        int ans = 1;
         for ( int i = 0; i < r; i++) {
             ans = ans * ( n - i);
             ans = ans / (i + 1);
         }
         return ans;
    }

    public static List<Integer> generateRow( int row) {
        List<Integer> result = new ArrayList<>();
        int ans = 1;
        result.add(1);
        for ( int col = 1; col < row; col++ ) {
            ans = ans * ( row - col);
            ans = ans / col;
            result.add( ans );
        }
        return result;
    }

    public static List<List<Integer>> generate( int n ) {
        List<List<Integer>> result = new ArrayList<>();
        for ( int i = 1; i <= n; i++) {
            result.add( generateRow( i ));
        }
        return result;
    }

    public static void main(String[] args) {
      //  System.out.println( generate( 5 ));
        System.out.println( NCR( 4, 2));
    }
}
