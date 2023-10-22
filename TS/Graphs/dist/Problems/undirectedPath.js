"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPath(edges, source, dst) {
    const graph = buildGraph(edges);
    // console.log(graph);
    return isTherePath(graph, source, dst, new Set());
}
const isTherePath = (graph, source, dst, visited) => {
    if (source === dst)
        return true;
    if (visited.has(source))
        return false;
    visited.add(source);
    for (const neighbour of graph[source]) {
        if (isTherePath(graph, neighbour, dst, visited)) {
            return true;
        }
    }
    return false;
};
function buildGraph(edges) {
    const graph = {};
    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}
const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
];
console.log(hasPath(edges, "i", "n"));
