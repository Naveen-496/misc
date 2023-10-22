"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function depthFirstSearch(graph, source) {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
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
depthFirstSearch(graph, "a");
