

function handleTimeout() {
  
  function inner() {
    return "Hello World"
  }
   setTimeout(() => {
    return inner;
  }, 1000);
}

console.log(handleTimeout());