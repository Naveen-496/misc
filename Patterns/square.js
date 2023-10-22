function squarePattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
}
squarePattern(6, 6);

function emptySquarePattern(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= cols; j++) {
      if (i == 1 || i == rows || j == 1 || j == cols) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

emptySquarePattern(5, 7);
