const isLandCount = (grid: string[][]) => {
  let count = 0;
  const visited: Set<string> = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
};

const explore = (
  grid: string[][],
  r: number,
  c: number,
  visited: Set<string>
): boolean => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) {
    return false;
  }

  if (grid[r][c] === "W") return false;
  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "L", "W"],
  ["L", "L", "W", "W", "L", "W"],
  ["W", "L", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "L", "W"],
  ["W", "L", "W", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "W"],
];

console.log(isLandCount(grid));
