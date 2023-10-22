package Java.Math.onestar;

import java.util.*;
import java.lang.*;
import java.io.*;

public class RetrieveOriginalArray {

    public static void main(String[] args) throws java.lang.Exception {
        Scanner s = new Scanner(System.in);
        int T = s.nextInt();

        for (int i = 0; i < T; i++) {
            int N = s.nextInt();
            int[] arr = new int[N];
            int sum = 0;
            for (int j = 0; j < N; j++) {
                arr[j] = s.nextInt();
                sum += arr[j];
            }
            sum = sum / (N + 1);
            for (int k = 0; k < N; k++) {
                System.out.print((arr[k] - sum) + " ");
            }
            System.out.println();
        }
        s.close();
    }
}
