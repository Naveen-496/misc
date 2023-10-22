import java.util.Scanner;

public class LeadGame {

  public static void leadWinner(int N, Scanner scan) {

    int a = 0, b = 0, maxLead = 0, winner = 0;

    for (int i = 1; i <= N; i++) {

      int p1 = 0, p2 = 0;
      p1 = scan.nextInt();
      p2 = scan.nextInt();

      a += p1;
      b += p2;
      int lead = Math.abs(a - b);

      if (a > b) {

        if (lead > maxLead) {
          maxLead = lead;
          winner = 1;
        }

      } else {

        if (lead > maxLead) {
          maxLead = lead;
          winner = 2;
        }

      }
    }
    System.out.println( winner + " " + maxLead );
  }

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);

    int N = scan.nextInt();
    leadWinner(N, scan);

    scan.close();

  }

}
