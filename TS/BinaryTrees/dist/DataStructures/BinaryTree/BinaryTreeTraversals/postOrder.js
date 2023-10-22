"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostOrder {
    constructor() { }
    // for every node check if its right exists
    // if the right exists then check if its has been visited 
    // if it is visited then right side is over 
    // print the root and go back to the prevoius node
    postOrder(root) {
        const result = [];
        if (root === null) {
            return result;
        }
        const stack = [];
        let curr = root;
        let lastVisited = null;
        while (curr !== null || stack.length > 0) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }
            const peekNode = stack[stack.length - 1];
            if (peekNode.right !== null && peekNode.right !== lastVisited) {
                // if the right child exists and not been visited yet
                // move to the right child
                curr = peekNode.right;
            }
            else {
                // right child does not exist for the last node
                const poppedNode = stack.pop();
                result.push(poppedNode.data);
                lastVisited = poppedNode;
            }
        }
        return result;
    }
}
