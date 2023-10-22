const countContests = (list: string[]): void => {
  let [start, lime] = [0, 0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "START38") {
      start++;
    } else {
      lime++;
    }
  }
  console.log(start + " " + lime);
};

const recentContest = (contestsList: string[][]) => {
  for (let i = 0; i < contestsList.length; i++) {
       
     countContests(contestsList[i]);
  }
};

const createContests = ( contests: string[]): string[][] => {
   
   const result = [];

   for ( let i = 0; i < contests.length; i++ ) {
     
       const contest = contests[i].split(" ");
       result.push( contest );
   }
   return result;
}

const contests = createContests(["START38 LTIME108 START38", "LTIME108 LTIME108 LTIME108 START38", "LTIME108 LTIME108", "START38 LTIME108 LTIME108 LTIME108 START38 LTIME108"]);
 //console.log( contests );

 recentContest(contests);
