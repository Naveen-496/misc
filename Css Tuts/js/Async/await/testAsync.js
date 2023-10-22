function asyncOp() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

async function testAsync() {
  let result = await asyncOp();
  console.log(result);
  console.log("Hii!");
}

testAsync();
console.log("finished");

