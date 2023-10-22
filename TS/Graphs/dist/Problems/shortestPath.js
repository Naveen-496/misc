"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shortestPath(graph, source, dst) {
    const queue = [[source, 0]];
    const visited = new Set();
    while (queue.length > 0) {
        const [node, distance] = queue.shift();
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
    w: ["x", "v"],
    x: ["w", "y"],
    y: ["x", "z"],
    z: ["y", "v"],
    v: ["w", "z"]
};
console.log(shortestPath(graph, "w", "z"));
