

function rottingOranges( grid: number[][] ) {
   
   if( grid === null || grid.length === 0 ) {
    return -1;
   }

   const rotten: number[][] = [];
   let freshCount = 0;

   for( let row = 0; row < grid.length; row++ ) {

      for( let col = 0; col < grid[row].length; col++ ) {
         
        if( grid[row][col] === 2 ) {
           rotten.push( [row, col ]);
        } else if( grid[row][col] === 1 ) {
           freshCount++;
        }
      }
   }
   console.log("fresh oranges count ",  freshCount);

   

   const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
   let minutes = 0;

   while ( rotten.length > 0 ) {
     
     const size = rotten.length;

     for( let i = 0; i < size; i++ ) {
       
       const current = rotten.shift()!;
       const currentRow = current[0];
       const currentCol = current[1];

       for( const dir of directions ) {
          
         const newRow = currentRow + dir[0];
         const newCol = currentCol + dir[1];

         if( newRow >=0 && newRow < grid.length 
                       && newCol >= 0 && newCol < grid[0].length 
                       && grid[newRow][newCol] === 1  ) {


           grid[newRow][newCol] = 2;
           rotten.push( [newRow, newCol]);
           freshCount--;             
        }
        if( freshCount === 0 ) {
          return minutes + 1;
        }
       }

     }

     minutes++;
   }
   return -1;
}

const orangegrid = [[1, 2, 1, 1],
[0, 1, 1, 2 ],
[2, 1, 0, 1 ],
[0, 1, 0, 1 ] ];

const result = rottingOranges(orangegrid)
console.log("No of minutes to rot all fresh oranges : ", result);
