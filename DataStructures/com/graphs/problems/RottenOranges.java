package com.graphs.problems;

import java.util.LinkedList;
import java.util.Queue;

public class RottenOranges {

    public static int rottingOranges( int[][] grid ) {

        if( grid == null || grid.length == 0 ) return 0;
        Queue< int[] > rotten = new LinkedList<>();
        int freshOranges = 0;

        for( int i = 0; i < grid.length; i++ ) {
             for( int j = 0; j < grid[i].length; j++ ) {
                  if( grid[i][j] == 2 ) {
                      rotten.offer( new int[]{i, j});
                  } else if( grid[i][j] == 1 ) {
                      freshOranges++;
                  }
             }
        }

       int[][] directions = {{ -1, 0}, { 1, 0}, { 0, -1}, {0, 1}};
        int minute = 0;
        while ( !rotten.isEmpty() ) {

            int size = rotten.size();
            // Process all rotten oranges in the current minute
            for ( int i = 0; i < size; i++ ) {
                int[] current = rotten.poll();
                int currentRow = current[0];
                int currentCol = current[1];

                // check all 4-directional neighbours
                for( int[] dir: directions ) {
                    int newRow = currentRow + dir[0];
                    int newCol = currentCol + dir[1];

                    // if the neighbour is freshOrange make it rotten and add it to the queue
                    if( newRow >= 0 && newRow < grid.length
                        && newCol >= 0 && newCol < grid[0].length
                            && grid[newRow][newCol] == 1 ) {
                        grid[newRow][newCol] = 2;
                        rotten.offer( new int[]{newRow, newCol});
                        freshOranges--;
                    }
                    if( freshOranges == 0 ) {
                        return minute + 1;
                    }

                }
            }
          minute++;

        }

        return -1;

    }



    public static void main(String[] args) {

        int[][] grid = {{1, 2, 1, 1},
                        {0, 1, 1, 2 },
                        {2, 1, 0, 1 },
                        {0, 1, 0, 1 } };

        System.out.println( rottingOranges(grid ));
    }
}
