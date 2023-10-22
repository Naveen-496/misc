type EacyPronounceCheck = (str: string) => boolean;

const easyPronounceCheck: EacyPronounceCheck = (str: string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let canEasily = true;
  let consonantCount = 0;
  for (const char of str) {
    if (vowels.indexOf(char) >= 0) {
      consonantCount = 0;
    } else {
      consonantCount++;
    }
    if (consonantCount >= 5) {
      canEasily = false;
      break;
    }
  }
  return canEasily;
};

function printResult ( result: boolean): void {

   const log = result ? "Yes" : "No";
   console.log( log );
}

const canEasily = easyPronounceCheck("schtrbvupobia");
printResult( canEasily );

