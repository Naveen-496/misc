"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function depthFirstSearch(graph, source) {
    console.log(source);
    for (const neighbour of graph[source]) {
        depthFirstSearch(graph, neighbour);
    }
}
const graphs = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: []
};
depthFirstSearch(graphs, "a");
