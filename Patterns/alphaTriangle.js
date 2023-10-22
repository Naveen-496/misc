function alphaTriangle(N) {
  let num = 65;
  for (let i = 1; i <= N; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(num) + " ";
    }
    num++;
    console.log(row);
  }
}
alphaTriangle(5);
