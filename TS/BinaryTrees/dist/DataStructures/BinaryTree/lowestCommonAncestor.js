"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    const less = (p.data < root.data && q.data < root.data);
    if (less)
        return lowestCommonAncestor(root.left, p, q);
    const bigger = (p.data > root.data && q.data > root.data);
    if (bigger)
        return lowestCommonAncestor(root.right, p, q);
    else
        return root;
};
