const minIsland = (grid: string[][]) => {
  // set to avoid duplicates
  const visited: Set<string> = new Set();
  let minCount = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let size = exploreIsland(grid, r, c, visited);
       size > 0 ?  minCount = Math.min(minCount, size) : minCount;
    }
  }
  return minCount;
};

const exploreIsland = (
  grid: string[][],
  r: number,
  c: number,
  visited: Set<string>
): number => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) {
    return 0;
  }

  if (grid[r][c] === "W") {
    return 0;
  }

  const pos = r + "," + c;
  if (visited.has(pos)) {
    return 0;
  }
  visited.add(pos);

  let size = 1;
  size += exploreIsland(grid, r - 1, c, visited);
  size += exploreIsland(grid, r + 1, c, visited);
  size += exploreIsland(grid, r, c - 1, visited);
  size += exploreIsland(grid, r, c + 1, visited);

  return size;
};

const grids = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
];

console.log( minIsland( grids ));
