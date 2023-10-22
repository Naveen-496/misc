import Graph from "../types/graph";

const connectedComponents = ( graph: Graph): number => {
   
   let count = 0;
   let largestCompenent = 0;
   const visited: Set<string> = new Set();

   for( const node in graph ) {
     if( explore( graph, node, visited) === true ) {
      console.log(visited.size);      
     largestCompenent = Math.max(largestCompenent, visited.size);
     visited.clear();
      count += 1;
     }
   }
   return largestCompenent;
}

const explore = (graph: Graph, node: string, visited: Set<string> ): boolean =>{
   
  // already visited node
   if( visited.has( node) ) return false;

   visited.add( node );

   for( const neighbour of graph[node]) {
     explore( graph, neighbour, visited );
   }

   // it's a new component
   return true;
}

const graph = {
  
  "3":[],
  "4": ["6"],
  "6": ["4", "5", "7", "8"],
  "8": ["6"],
  "7": ["6"],
  "5": ["6"],
  "1": ["2"],
  "2": ["1"]
}

console.log(connectedComponents( graph ));
