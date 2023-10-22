function greeting() {
  let message = "Hi";

  function sayHi() {
     return (message);
  }

   return sayHi;
}

// the function  has returned another function with all of its variables 
// we cannot access the inner functions directly outside that main function
 let result = greeting();
console.log(result());
