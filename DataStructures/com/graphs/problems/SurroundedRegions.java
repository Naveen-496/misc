package com.graphs.problems;

public class SurroundedRegions {

    private static void dfs( int row, int col, int[][] vis, int[][] directions, char[][] mat ) {

         vis[row][col] = 1;

         for( int[] dir : directions ) {

             int newRow = row + dir[0];
             int newCol = col + dir[1];

             if( newRow >= 0 && newRow < mat.length && newCol >= 0
                     && newCol < mat[0].length && vis[newRow][newCol] == 0 && mat[newRow][newCol] == 'O') {
                 dfs( newRow, newCol, vis, directions, mat);
             }
         }
    }

    public static void fill( int n, int m, char[][] mat ) {


        int[][] vis = new int[n][m];
        int[][] directions = { { -1, 0}, {1, 0}, {0, -1}, {0, 1}};

        for( int j = 0; j < mat[0].length; j++ ) {

            if( vis[0][j] == 0 && mat[0][j] == 'O') {
                dfs( 0, j, vis, directions, mat );
            }

            if( vis[n -1][j] == 0 && mat[n - 1][j] == 'O') {
                dfs( n - 1, j, vis, directions, mat );
            }
        }

        // mark unvisited 'O's with 'X'

        for( int i = 0; i < mat.length; i++ ) {
             for( int j = 0; j < mat[i].length; j++ ) {
                  if( vis[i][j] == 0 && mat[i][j] == 'O') {
                      mat[i][j] = 'X';
                  }
             }
        }
    }

    public static void main(String[] args) {
        char mat[][] = {
                {'X', 'X', 'X', 'X'},
                {'X', 'O', 'X', 'X'},
                {'X', 'O', 'O', 'X'},
                {'X', 'O', 'X', 'X'},
                {'X', 'X', 'O', 'O'}};

        fill(5, 4, mat);

        for( char[] chars: mat ) {
             for( char c : chars ) {
                 System.out.print(c + ", ");
            }
            System.out.println();
        }
    }
}
