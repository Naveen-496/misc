package com.basicMath;

public class ReverseNumber {

    public static int reverseNumber(int number){

        int revNum = 0;

        while(number > 0){

            int lastDigit = number % 10;
            revNum = (revNum * 10) + lastDigit;
            number = number / 10;
        }

        return revNum;
    }

    public static void main(String[] args) {

        int originalNumber = 7789;
        System.out.println("reverse of " + originalNumber + " is : "  + reverseNumber(originalNumber));
    }
}
