package Java.Math.onestar;

import java.util.Scanner;

public class SplitN {

    private static void  printOps(int N ) {
        int count = 0;
        while ( N > 0 ) {
            int rem = N % 2;
            if( rem == 1 ) {
                count++;
            }
            N /= 2;
        }
        System.out.println(count - 1);
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int T = s.nextInt();
        for ( int i = 1; i <= T; i++ ) {
            int N = s.nextInt();
            printOps(N);
        }
    }
}
