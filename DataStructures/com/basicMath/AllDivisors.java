package com.basicMath;

import java.util.Scanner;

public class AllDivisors {

    // all divisors of a number lie between 1 and the number
    public static void printAllDivisors(int number){

         int num1 = 0;
         int num2 = 0;
        for( int i = 1; i <= number; i++ ){
            if( number % i == 0){
                num1 = num2;
                System.out.print(i + ", ");
            }
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner((System.in));
        System.out.println("Give me a number to show all divisors");
        printAllDivisors(scan.nextInt());
        System.out.println();
    }
}
