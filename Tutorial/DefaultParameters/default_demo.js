
// if we do not pass any arguments to the function during function invocation then 
// the default value to that parameter will be assigned as undefined
// so to overcome that behaviour we can define some default parameters when user does not pass the required arguments

function print(arr = [1,2, 3, 4, 5]){
  console.log(arr);
}

// print("Hello");

// function sayHello(message="hi", times = 3, name="Naveen"){

//   for( let i = 0; i < times; i++){
//     console.log(`${message} to ${name}`);
//   }
// }

// sayHello(undefined, undefined, undefined);

function requiredArg(){
  throw new Error('the argument is required');
}

function add(x = requiredArg(), y = requiredArg()){
  return x + y;
}

console.log(add(10, 20));