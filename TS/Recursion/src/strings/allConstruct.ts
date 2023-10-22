




function allConstruct ( target: string, wordBank: string[] ): string[][] {
   
  if( target === "" ) {
    return [[]];
  }

  const res:string[][] = [];
  for( const word of wordBank ) {
     
     if( target.indexOf( word ) === 0 ) {
        const rem = target.slice( word.length );
        const result = allConstruct( rem, wordBank );

        if( result.length > 0  ) {
           
            // result[0].push( word );
            res.push( [...result[0], word] );
            // if we return here itself then we only get one combination 
            //  return result;

        }
     }
      
  }
  return res;
}


function allConstructMemo ( target: string, wordBank: string[], memo: { [key: string]: string[][]} = {} ): string[][] {
    
  if( target in memo ) {
     return memo[ target ];
  }

  if( target === "" ) {
    return [[]];
  }

  const res:string[][] = [];
  for( const word of wordBank ) {
     
     if( target.indexOf( word ) === 0 ) {
        const rem = target.slice( word.length );
        const result = allConstructMemo( rem, wordBank, memo );

        if( result.length > 0  ) {
           
            // result[0].push( word );
            res.push( [ word,...result[0]] );
            // if we return here itself then we only get one combination 
            //  return result;

        }
     }
      
  }
  return memo[ target ] = res;
}




const targete = "abcdef";
const wordBanke = ["ab", "abc", "def", "abcd", "ef"];
console.log( allConstruct( targete, wordBanke ));

