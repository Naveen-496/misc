
function makeClosure(){
   
  let counter = 0;
  const newElement = document.createElement("div");

  const btn = document.createElement("button");

  const text = document.createTextNode("counter : " + counter);

  btn.appendChild(text);

  newElement.appendChild(btn);

  document.body.appendChild(newElement)

  btn.onclick = function(){
    
    btn.style.textTransform = "uppercase";
    newElement.style.backgroundColor = "green";
    text.textContent = "counter"
    btn.textContent = text.textContent + " : " + ++counter;

  }

  

}

window.onload = nextClosureExapmple;

function makeCounter(){
   
  var i;

  for(i = 0; i < 3; i++){
     
    setTimeout(function() {
      console.log(`{i value is ${i}}`);
    }, 5000);
  }
}

// on line no 32 a fn is defined and stored its ref in makeCounter variable

// on line 36 we are iterating for 3 times and for every i value we are 
// defining a setTimeout fn and for that timeout fn we are registring a 
// function and which logs the i value after a give time gap

function asyncOperation(counter){
   
  setTimeout( function(){
     console.log(`{counter value is ${counter}}`);
  }, 2000);
}

function otherClosureExamlpe(){
   
  var i;

  for( i = 0; i < 3; i++){
     
     asyncOperation(i);
  }
}

var example = [];

function nextClosureExapmple(){
   
   

   for( var i = 0; i < 5; i++){
     
    example[i] = (function inner(x){
       return  function () {
         return x;
       };
    })(i);
     
   }
}

