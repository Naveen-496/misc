function reversestarPyramid(N) {
  for (let i = N; i >= 0; i--) {
    let row = "";
    // printing spaces
    for (let j = 0; j < N - i; j++) {
      row += " ";
    }

    // printing starts
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    // again printing spaces
    for (let j = 0; j < N - i; j++) {
      row += " ";
    }

    console.log(row);
  }
}

function starPyramid(N) {
  for (let i = 0; i < N; i++) {
    let row = "";
    // printing spaces
    for (let j = 0; j < N - i; j++) {
      row += " ";
    }

    // printing starts
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    // again printing spaces
    for (let j = 0; j < N - i; j++) {
      row += " ";
    }

    console.log(row);
  }
}

starPyramid(5);
reversestarPyramid(5);
