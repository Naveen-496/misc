"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kthSmallest = function (root, k) {
    const stack = [root];
    let curr = root;
    // inorder traversal of binary search tree gives the result in sorted order
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        k--;
        if (k === 0)
            return curr.data;
        curr = curr.right;
    }
    return k;
};
