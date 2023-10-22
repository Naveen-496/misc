function charPyramid(N) {
  for (let i = 0; i < N; i++) {
    let row = "";

    for (let j = 0; j < N - i - 1; j++) {
      row += " ";
    }

    let num = 65;

    for (let j = 1; j <= 2 * i + 1; j++) {
      row += String.fromCharCode(num);
      if (j <= (2 * i + 1) / 2) {
        num++;
      } else num--;
    }

    for (let j = 0; j < N - i - 1; j++) {
      row += " ";
    }

    console.log(row);
  }
}

charPyramid(5);
