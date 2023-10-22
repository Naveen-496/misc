"use strict";
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
function goodNodes(root) {
    if (root === null) {
        return 0;
    }
    let count = 0;
    const goodNode = (root, max) => {
        if (root === null)
            return count;
        if (root.data >= max) {
            count++;
        }
        if (root.left !== null)
            goodNode(root.left, Math.max(max, root.data));
        if (root.right !== null)
            goodNode(root.right, Math.max(max, root.data));
    };
    goodNode(root, -Number.MAX_VALUE);
    return count;
}
const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(2);
console.log(goodNodes(root));
