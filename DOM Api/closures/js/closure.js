
var timer1;
var timer2;

window.onload = makeTimer;
function makeTimer(){
   
  var counter = 0;

  setInterval(timeIt, 500);

  function timeIt(){
     
    document.getElementById("h3").textContent = counter;

    document.getElementsByTagName("h4").item(0).textContent = counter;

    counter++;

  }
   
}