function countConstruct(target: string, wordBank: string[]): number {
  if (target === "") {
    return 1;
  }

  let count = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const remainder = target.slice(word.length);
      count += countConstruct(remainder, wordBank);
    }
  }

  return count;
}

// let target = "abcdef";

// let str1 = "ab";
// let str2 = "abc";
// let str3 = "def";

// let index = target.indexOf( str1 );
// console.log( index );
// target = target.slice( str2.length  );
// console.log( target );

function countConstructMemo(
  target: string,
  wordBank: string[],
  memo: { [key: string]: number } = {}
): number {
  if (target in memo) {
    return memo[target];
  }

  if (target === "") {
    return 1;
  }

  let count = 0;

  for (const word of wordBank) {
    if (target.startsWith(word)) {
      const remainder = target.slice(word.length);
      count += countConstructMemo(remainder, wordBank, memo);
    }
  }

  return (memo[target] = count);
}

const targets = "abcdef";
const wordBanks = ["ab", "abc", "def", "ef", "abcd", "abcdef"];

console.log(countConstruct(target, wordBank));
