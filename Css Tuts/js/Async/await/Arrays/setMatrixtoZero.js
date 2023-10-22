function setMatrixToZero(matrix) {
  const rows = new Set();
  const cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // setting all rows to zero if any row element is zero

  rows.forEach((rowIndex) => {
    for (let i = 0; i < matrix[rowIndex].length; i++) {
      matrix[rowIndex][i] = 0;
    }
  });

  // set cols to zero where 0

  cols.forEach((colIndex) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][colIndex] = 0;
    }
  });

  console.log(rows);
  console.log(cols);

  return matrix;
}

let matrix = [
  [1, 2, 0],
  [1, 0, 3],
  [2, 3, 2],
];

console.log(setMatrixToZero(matrix));
