
function reachFast ( c: number, h: number, k:number ) {
      
  let diff = Math.abs( c - h );
  console.log( (diff % k) ? ( Math.floor(diff / k) + 1 ) : Math.floor( diff / k));
}

reachFast(20, 10, 3);
reachFast(36, 36, 5);
reachFast(50, 4, 100);
reachFast(4, 30, 2);