"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
function swap(root) {
    if (!root) {
        return;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
}
function invertTree(root) {
    let temp;
    if (!root) {
        return null;
    }
    if (root.left || root.right) {
        temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
    }
    return root;
}
function preOrderTraversal(root, res) {
    if (!root) {
        return;
    }
    res.push(root.data);
    preOrderTraversal(root.left, res);
    preOrderTraversal(root.right, res);
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
let res = [];
preOrderTraversal(root, res);
console.log(res);
res = [];
invertTree(root);
preOrderTraversal(root, res);
console.log(res);
