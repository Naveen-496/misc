const gridTraveller = (row, col) => {
  if (row === 0 && col === 0) {
    return 1;
  }

  if (row < 0 || col < 0) {
    return 0;
  }

  return gridTraveller(row, col - 1) + gridTraveller(row - 1, col);
};

// console.log(gridTraveller(30, 30));

const gridTravellerM = (row, col, memo = {}) => {
  const pos = row + "," + col;
  if (pos in memo) return memo[pos];

  if (row === 1 && col === 1) {
    return 1;
  }
  if (row === 0 || col === 0) {
    return 0;
  }

  memo[pos] =
    gridTravellerM(row - 1, col, memo) + gridTravellerM(row, col - 1, memo);
  return memo[pos];
};

console.log(gridTravellerM(3, 3));
