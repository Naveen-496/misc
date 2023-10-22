
const one = () => Promise.resolve('One!');

async function myFunc(){
  console.log("In My Function");
  const res = await one();
  console.log("After Await");
  console.log(res);
  
}

console.log("Before Execution");
myFunc();
console.log("After Execution");


Promise.resolve(123)
   .then(x => {
     console.log(x === 12);
   })