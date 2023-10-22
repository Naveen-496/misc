import Graph from "../types/graph";

function depthFirstSearch(graph: Graph, source: string): void {
  const stack = [source];

  while (stack.length > 0) {
    const current: string = stack.pop()!;
    console.log(current);
    
    for (const neighbour of graph[current]) {
      stack.push(neighbour);
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

depthFirstSearch( graph, "a");