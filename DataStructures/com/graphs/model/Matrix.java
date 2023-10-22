package com.graphs.model;

public class Matrix {

    public static void main(String[] args) {

        int n = 3, m = 3;

        int[][] mat = new int[n + 1][n + 1];

        // 1 ---> 2
        mat[1][2] = 1;
        mat[2][1] = 1;

        // 2 ---> 3
        mat[2][3] = 1;
        mat[3][2] = 1;

        // 1 ---> 3
        mat[1][3] = 1;
        mat[3][1] = 1;
    }
}
