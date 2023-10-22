



// let target = "abcdef";

// let str1 = "ab";
// let str2 = "abc";
// let str3 = "def";

// let index = target.indexOf( str1 );
// console.log( index );
// target = target.slice( str2.length  );
// console.log( target );


function canConstruct ( target: string, wordBank: string[] ): boolean {
   
  if( target === "" ) {
    return true;
  }

  for( const word of wordBank ) {
     
      if( target.startsWith( word ) ) {
        const remainder = target.slice( word.length );
        if( canConstruct( remainder, wordBank ) === true ) {
           return true;
        }
      }
  }
  return false;
}

const target = "defabc";
const wordBank = ["ab", "abc", "cd", "def", "ef"];

console.log( canConstruct( target, wordBank ));

