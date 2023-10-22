"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tuple {
    constructor(node, row, col) {
        this.node = node;
        this.row = row;
        this.col = col;
    }
}
class BoundaryTraversal {
    //  findVertex( root: TreeNode ): Array< Array< number > > {
    //   const result = [[1]];
    //   return result;
    //  }
    isLeafNode(root) {
        return (root === null || root === void 0 ? void 0 : root.left) === null && (root === null || root === void 0 ? void 0 : root.right) === null;
    }
    addLeftBoundary(root, res) {
        if (root === null)
            return;
        let curr = root.left;
        while (curr !== null) {
            if (this.isLeafNode(curr) === false)
                res.push(curr.data);
            if (curr.left !== null)
                curr = curr.left;
            else
                curr = curr.right;
        }
    }
    addLeafNodes(root, res) {
        if (root === null)
            return;
        if (this.isLeafNode(root)) {
            res.push(root.data);
        }
        this.addLeafNodes(root.left, res);
        this.addLeafNodes(root.right, res);
    }
    addRightBoundary(root, res) {
        if (root === null)
            return;
        const temp = [];
        let curr = root.right;
        while (curr !== null) {
            if (this.isLeafNode(curr) === false)
                temp.push(curr.data);
            if (curr.right !== null)
                curr = curr.right;
            else
                curr = curr.left;
        }
        temp.reverse().forEach((data) => res.push(data));
    }
    boundaryTraversal(root) {
        const result = [];
        if (root === null)
            return result;
        result.push(root.data);
        this.addLeftBoundary(root, result);
        this.addLeafNodes(root, result);
        this.addRightBoundary(root, result);
        return result;
    }
}
