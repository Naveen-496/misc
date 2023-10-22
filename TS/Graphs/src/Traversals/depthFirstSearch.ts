import Graph from "../types/graph";


function depthFirstSearch(graph: Graph, source: string): void {
  console.log(source);

  for (const neighbour of graph[source]) {
    depthFirstSearch(graph, neighbour);
  }
}

const graphs: Graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
};

depthFirstSearch( graphs, "a");