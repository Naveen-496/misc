
function fillFlood( grid: number[][], sr: number, sc:number, oldColor: number, newColor: number) {
    
   const rowInbounds = 0 <= sr && sr < grid.length;
   const colInbounds = 0 <= sc && sc < grid[0].length;

   if( !rowInbounds || !colInbounds || grid[sr][sc] !== oldColor ) {
     return;
   }

   grid[sr][sc] = newColor;

   fillFlood( grid, sr - 1, sc, oldColor, newColor);
   fillFlood( grid, sr + 1, sc, oldColor, newColor);
   fillFlood( grid, sr, sc - 1, oldColor, newColor);
   fillFlood( grid, sr, sc + 1, oldColor, newColor);
}

function floodFill( grid: number[][], sr: number, sc: number , newColor: number ) {
   
   const oldColor: number = grid[sr][sc];
   if( oldColor === newColor ) {
    return;
   }
 
   fillFlood( grid, sr, sc, oldColor, newColor);

}

const floodGrid = [
  [1, 1, 1, 0, 1],
  [1, 2, 2, 0, 1],
  [1, 2, 2, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 2]
]

floodFill( floodGrid, 1, 1, 3);
console.log( floodGrid );
