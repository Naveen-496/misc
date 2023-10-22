function binaryTriangle() {
  for (let i = 1; i <= 5; i++) {
    let row = "";

    let start;
    if (i % 2 == 0) start = 1;
    else start = 0;

    for (let j = 1; j <= i; j++) {
      row = row + start + " ";
      start = 1 - start;
    }
    console.log(row);
  }
}

function binary(num) {
  let dupNum = num;
  let binary = "";
  while (dupNum > 0) {
    let rem = parseInt(dupNum % 2);
    binary += rem;
    dupNum = parseInt(dupNum / 2);
  }
  return binary;
}

binaryTriangle();
