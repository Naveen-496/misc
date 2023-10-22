package com.binaryTrees;

public class CombinationOfWords {

    private static final String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static void main(String[] args) {

        int[] digits = {1, 5, 2, 9, 6, 4, 9};
        CombinationOfWords cmb = new CombinationOfWords();
        cmb.recur(digits, "", 0);
    }

    public void recur(int[] digits, String str, int i) {

        if( i == digits.length ) {
           System.out.println( str );
            return;
        }

        int sum = 0;

        for( int j = i; j <= Integer.min(i + 1, digits.length - 1); j++ ) {

            sum = ( sum * 10 ) + digits[j];

            if( sum > 0 && sum <= 26 ) {
               // System.out.println("sum : " + sum);
                recur(digits, str + alphabet.charAt( sum - 1), j + 1);
            }
        }
    }
}
