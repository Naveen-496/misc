package com.basicMath;

import java.util.Scanner;

public class PalindromeNumber {

    public static boolean isPalindromeNumber(int number){

        int originalNum = number;
        int revNum = 0;

        while(number > 0){
            int ld = number % 10;
            revNum = (revNum * 10) + ld;
            number = number / 10;
        }

     return revNum == originalNum;
    }

    public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
        System.out.println("Enter a number to check for palindrome");
        boolean isPalindrome = isPalindromeNumber(scan.nextInt());
        if(isPalindrome) System.out.println("Yes it is palindrome Number");
        else System.out.println("The given number is not a palindrome number");
    }
}
