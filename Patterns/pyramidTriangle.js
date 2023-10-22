function pyramidTriangle() {
  let spaces = 2 * 4 - 1;
  for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j + "";
    }

    for (j = 1; j < spaces; j++) {
      row += " ";
    }

    for (j = i; j >= 1; j--) {
      row += j + "";
    }
    spaces -= 2;
    console.log(row);
  }
}

pyramidTriangle();
