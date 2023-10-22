"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(data) {
        this.data = data === undefined ? 0 : data;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
class BinaryTree {
    constructor() {
        this.getBinary = function () {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.right.right.right = new TreeNode(8);
            root.right.right.right.right = new TreeNode(9);
            return root;
        };
        this.getSmallBinaryTree = function () {
            const root = new TreeNode(10);
            root.left = new TreeNode(60);
            root.right = new TreeNode(30);
            root.left.left = new TreeNode(45);
            return root;
        };
    }
    getBinaryTreeForPreOrder() {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
    }
}
exports.default = BinaryTree;
