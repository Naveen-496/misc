import Graph from "../types/graph";

function shortestPath(graph: Graph, source: string, dst: string): number {
  const queue: [string, number][] = [[source, 0]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const [node, distance] = queue.shift()!;

    if (node === dst) {
      return distance;
    }

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return -1;
}

const graph = {
  w:["x", "v"],
  x:["w", "y"],
  y:["x", "z"],
  z:["y", "v"],
  v:["w", "z"]
}

console.log( shortestPath( graph, "w", "z"));
