package Java.Math;

import java.util.Scanner;

public class MinIncome {

  public static void main(String[] args) {
     
     Scanner scan = new Scanner(System.in );
     System.out.println("Enter the number of test cases ");
      int numOfTestCases = scan.nextInt();

      for( int testCase = 1; testCase <= numOfTestCases; testCase++ ) {
        
         System.out.println("Enter the income ");
         int income, investment = 0;
         income = scan.nextInt();
         System.out.println("Enter the min income ");
         investment = scan.nextInt();

         if( income > investment ) {
             System.out.println("min investment is : " +  (income - investment) );
         } else {
          System.out.println("Min investment is : " + 0 );
         }
      }

      scan.close();

  }
  
}
