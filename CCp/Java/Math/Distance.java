package Java.Math;
import java.util.Scanner;

public class Distance {

  public static void main(String[] args) {
    
     Scanner scan = new Scanner(System.in);
    
      System.out.println("Enter the no of test cases ");
       int noOfTestCases = scan.nextInt();
       for( int test = 1; test <= noOfTestCases; test++ ) {
         
          System.out.println("Enter the distance from his home ");
          int distance = scan.nextInt();

          System.out.println("Chef walks " + ( distance * 10 ) + " kms from his home ");
       }
      scan.close();
  }
  
}
