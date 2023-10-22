

function addAsync(x, y){

  const p = new Promise(function(res, rej){
      
    setTimeout(() =>{
      if( x < 0 || y < 0){
        rej("Negative Values are Given")
      }
      else{
      res(x + y);
      }
    }, 3000)
  });

  return p;
}

const result = addAsync(2,-3);
result.then(value => console.log(value));
result.catch(err => console.log(err));