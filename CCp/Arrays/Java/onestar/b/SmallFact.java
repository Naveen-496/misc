import java.util.Scanner;

/**
 * SmallFact
 */
public class SmallFact {

  public static void factorial(int n) {

    int fact = 1;
    for (int i = n; i >= 1; i--) {
      fact *= i;
    }
    System.out.println(fact);

  }

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int T = scan.nextInt();

    while (T > 0) {

      int N = scan.nextInt();
      factorial(N);
      T--;
    }

    scan.close();
  }

}