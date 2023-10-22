"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bfs(graph, source) {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (const neighbour of graph[current]) {
            queue.push(neighbour);
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
bfs(graph, "a");
