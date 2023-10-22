function statTriangle() {
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

statTriangle();

function numberTriangle() {
  let num = 1;
  for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + num++ + " ";
    }

    console.log(row);
  }
}

// numberTriangle();

function numberTriangleFromI() {
  for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }

    console.log(row);
  }
}
// numberTriangleFromI();

function reversestatTriangle() {
  for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

reversestatTriangle();
