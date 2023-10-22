package com.graphs.problems;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Queue;

public class NearestDistance {

    private static final int[][] DISTANCES = {{-1, 0}, { 1, 0}, {0, -1}, {0, 1}};
                                            // up        down     left      right
    public static int[][] nearestDistance( int[][] grid ) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][] distances = new int[ rows ][ cols ];

        Queue< int[] > queue = new ArrayDeque<>();

        if( grid == null || grid.length == 0 || grid[0].length == 0 ) {
            return null;
        }
        for( int[] row: distances ) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        for( int row = 0; row < rows; row++ ) {
             for( int col = 0; col < cols; col++ ) {

                 if( grid[row][col] == 1 ) {
                     distances[row][col] = 0;
                     queue.offer( new int[]{ row, col });
                 }
             }
        }
        while ( !queue.isEmpty() ) {

            int current[] = queue.poll();
            int currentRow = current[0];
            int currentCol = current[1];

            for( int[] direction: DISTANCES ) {
                 int newRow = currentRow + direction[0];
                 int newCol = currentCol + direction[1];

                 if( newRow >= 0 && newRow < grid.length &&
                           newCol >= 0 && newCol < grid[0].length
                         && distances[newRow][newCol] == Integer.MAX_VALUE ) {
                     distances[newRow][newCol] = distances[currentRow][currentCol] + 1;
                     queue.offer( new int[]{ newRow, newCol});
                 }
            }
        }


        return distances;
    }


    public static void main(String[] args) {

        int[][] grid = {{ 0, 0, 0},
                        { 0, 1, 0},
                        { 1, 0, 0},};

       int distances[][] =  nearestDistance(grid);

        for( int[] rows: distances ) {
            for( int row: rows ) {
                System.out.print(row + ", ");
            }
            System.out.println();
        }
    }
}
