console.log("Welcome from JavaScript");
number = 3781;
temp = number;
let digits = 0;

while( number > 0){
	digits++;
	number = parseInt( number / 10);
}
console.log(digits);
number = temp;

sum = 0;

while( number > 0){

	sum = sum + ( number % 10) ** digits ;
	number = parseInt( number / 10);
}
sum = parseInt(sum);

if( sum == temp)
	console.log(`The number ${temp} is ArmStrong number`);
else 
     console.log(`The number ${temp} is not ArmStrong Number`);
