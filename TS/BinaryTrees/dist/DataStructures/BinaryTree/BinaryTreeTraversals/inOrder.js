"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InOrder {
    // left - root - right
    constructor() { }
    inOrder(root) {
        const result = [];
        if (root === null) {
            return result;
        }
        const stack = [];
        let curr = root;
        while (curr !== null || stack.length > 0) {
            while (curr !== null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            result.push(curr.data);
            curr = curr.right;
        }
        return result;
    }
}
