import Graph from "../types/graph";

function bfs( graph: Graph, source: string ): void {
   
   const queue = [ source ];

   while( queue.length > 0 ) {
      
     const current: string = queue.shift()!;
     console.log(current);

     for( const neighbour of graph[current] ) {
       queue.push( neighbour );
     }
     
   }
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
};

bfs( graph, "a");