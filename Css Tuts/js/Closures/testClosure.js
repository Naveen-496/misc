function checkPassword(password) {
  return function (checkPassword) {
    return password === checkPassword;
  };
}

let validatePassword = checkPassword("pass");
console.log(validatePassword("pass1"));

function multN(n) {

  return function (m) {
    return m * n;
  };
}

let multy = multN(5);
console.log(multy(3));


function makeCounter(){
   var count = 0;

   return function(){
     count = count + 1;
     return count;
   }
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());