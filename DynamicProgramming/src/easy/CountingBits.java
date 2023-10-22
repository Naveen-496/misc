package easy;

import java.util.Arrays;

public class CountingBits {

    public static void countBits(int[] res, int count, int i, int n) {
        if (i > n) return;
        res[i] = count;
        countBits(res, count, i * 2, n);
        countBits(res, count + 1, i * 2 + 1, n);
    }

    public static int[] countBits2(int n) {
        int[] res = new int[n + 1];
        countBits(res, 1, 1, n);
        return res;
    }

    public static int[] countBits(int n) {
        int[] res = new int[n + 1];
        res[1] = 1;

        for (int i = 2; i <= n; i++) {
            System.out.println(i + " --> " + res[i / 2] + " " + res[i % 2]);
            res[i] = res[i / 2] + res[i % 2];
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits2(32)));
    }
}
