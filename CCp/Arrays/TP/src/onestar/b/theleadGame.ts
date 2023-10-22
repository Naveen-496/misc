const leadWinner = (N: number, points1: number[], points2: number[]): void => {
  let [a, b, maxlead, winner] = [0, 0, 0, 0];
  for (let i = 0; i < N; i++) {
    let [p1, p2] = [points1[i], points2[i]];
    a += p1;
    b += p2;
    const lead = Math.abs(a - b);

    if (a > b) {
      if (lead > maxlead) {
        maxlead = lead;
        winner = 1;
      }
    } else {
      if (lead > maxlead) {
        maxlead = lead;
        winner = 2;
      }
    }
  }

  console.log( winner , maxlead );
};

leadWinner( 5, [140, 89, 90, 112, 88], [82, 134, 110, 106, 90]);
