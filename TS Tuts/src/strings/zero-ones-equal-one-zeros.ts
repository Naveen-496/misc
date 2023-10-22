

type ZeroOnesAndOneZeros = ( N: number) => string;

const printZeroOnesAndOneZeros: ZeroOnesAndOneZeros = ( N: number): string => {

    let result = "";
    for ( let i = 1; i <= N; i++ ) {
        result += i === 1 || i === N ? "1" : "0";
    }
    return result;
}

const res = printZeroOnesAndOneZeros(5);
console.log( res );