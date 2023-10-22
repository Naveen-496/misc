package com.basicMath;

// ArmStrong number is a number when sum of the each digit to the power of no of digits
// is equal to the number itself

import java.util.Scanner;

public class ArmStrongNumber {

    public static boolean  armStrongNumber(int number){
        // 1. count the digits
        int count = (int) Math.log10(number) + 1;

        // or to count manually
        int manualCount = 0;
        int dupNumber = number;
        while(dupNumber > 0){
            manualCount ++;
            dupNumber /= 10;
        }

        // now we got the count of digits
        dupNumber = number;
        int initArmStrongNumner = 0;
        while(dupNumber > 0){
            int ld = dupNumber % 10;
            initArmStrongNumner = initArmStrongNumner + findPower(ld, count); // or (int) Math.pow(ld, count)
            dupNumber /= 10;
        }

        return initArmStrongNumner == number;
    }

    public static int findPower(double base, double exponent){

        int result = 1;

        for( int i = 0; i < exponent; i++){
            result *= base;
        }

        return result;
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a number to check for ArmStrong Number");
        boolean result = armStrongNumber(scan.nextInt());

        if( result ) System.out.println("Yes the number is ArmStrong number");
        else System.out.println("No, the given number is not ArmStrong number");
    }
}
