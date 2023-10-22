package com.graphs.problems;

public class FloodFill {
    public static void fill( int[][] grid, int row, int col, int newColor, int oldColor ) {

        boolean rowInbounds = 0 <= row && row < grid.length;
        boolean colInbounds = 0 <= col && col < grid[0].length;

        if( !rowInbounds || !colInbounds || grid[row][col] != oldColor) {
            return;
        }
            grid[row][col] = newColor;


        fill( grid, row - 1, col, newColor, oldColor);
        fill( grid, row + 1, col, newColor, oldColor);
        fill( grid, row, col - 1, newColor, oldColor);
        fill( grid, row, col + 1, newColor, oldColor);
        return;
    }

    public static void floodFill( int[][] grid, int row, int col, int newColor ) {
        if( grid[row][col] == newColor ) {
            return;
        }
        int oldColor = grid[row][col];
        fill( grid, row, col, newColor, oldColor);
    }

    public static void main(String[] args) {

        int[][] grid = { {1, 1, 1, 1, 0},
                         {2, 2, 1, 0, 1},
                         {2, 2, 2, 1, 0 },
                         {2, 2, 1, 0, 1},
                         {2, 2, 2, 1, 0 } };

        floodFill( grid, 1, 1, 3);

        for ( int row = 0; row < grid.length; row++ ) {
            StringBuilder builder = new StringBuilder();
            builder.append("[ ");
             for ( int col = 0; col < grid[row].length; col++ ) {

                 builder.append( grid[row][col]);
                 if( col == grid[row].length - 1) {
                     builder.append( " ] ");
                 } else {
                     builder.append(", ");
                 }
             }
            System.out.println(builder);
        }
    }
}
