
function generatePascalsTriangle(n) {
  const triangle = [];

  for (let i = 0; i < n; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
}








function getPascalsTriangle(N) {
  let triangles = [];

  for (let i = 0; i < N; i++) {
    let innerTriangles = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        innerTriangles[j] = 1;
      } else if (j == i) {
        innerTriangles[j] = 1;
      } else if (j > 0 && j < i) {
       // console.log(triangles[1][0], triangles[1][1]);
        innerTriangles[j] = triangles[i - 1][j - 1] + triangles[i - 1][j];
      }
    }

    triangles.push(innerTriangles);
  }

  return triangles;
}
let pascals = getPascalsTriangle(3);

console.log(getPascalsTriangle(5));
