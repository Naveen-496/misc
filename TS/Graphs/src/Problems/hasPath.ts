import Graph from "../types/graph";

function hasPath(graph: Graph, source: string, dst: string): boolean {
  if (source === dst) return true;

  for (const neibhour of graph[source]) {
    if (hasPath(graph, neibhour, dst) === true) {
      return true;
    }
  }
  return false;
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

console.log(hasPath(graph, "e", "f"));
