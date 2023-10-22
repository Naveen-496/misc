// Note: please restart the page if syntax highlighting works bad.
let el = document.querySelector('#header');

let msg: string = 'Hi friend, try edit me!';
el.innerHTML = msg;

console.log('it shows results as you type');


var graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
};

function bfs ( graph, source: string ) {

  const queue = [];
  queue.push( source );

  while( queue.length > 0 ) {
     const current = queue.shift();

     console.log( current );

     for( const neighbour of graph[ current ]) {
        queue.push( neighbour );
     }
  }
}

function dfs ( graph, source: string ) {
   
    const stack = [];
    stack.push( source );

    while( stack.length > 0 ) {
       const current = stack.pop();

       console.log( current );

       for( const neighbhour of graph[current] ) {
         stack.push( neighbhour );
       }
    }
}

dfs( graph, "a")