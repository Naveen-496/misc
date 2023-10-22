
const reversed = (number) => {

  let reversed = 0;

  while( number != 0){

    digits = number % 10;
    reversed = reversed * 10 + digits;
    number = parseInt(number / 10);    
  }

  return reversed;
}

const result = reversed(12345);
console.log(result);