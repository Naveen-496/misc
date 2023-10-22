

function getServerStatus(){
  
  const result = fetch('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/');

  result.then( function(status) {
    console.log("The status from the Function is " + status.headers);
  })

  result.catch( function(status){
    console.log("The status from the Server is " + status.getServerStatus);
  })
}

getServerStatus();