"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
function maxDepthOfTree(root) {
    if (!root) {
        return 0;
    }
    const leftMax = maxDepthOfTree(root.left);
    const rightMax = maxDepthOfTree(root.right);
    return 1 + Math.max(leftMax, rightMax);
}
function minDepthOfTree(root) {
    if (!root) {
        return 0;
    }
    const leftMax = maxDepthOfTree(root.left);
    const rightMax = maxDepthOfTree(root.right);
    return 1 + Math.min(leftMax, rightMax);
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const anotherRoot = binaryTree.getSmallBinaryTree();
const maxHeight = maxDepthOfTree(root);
const minHeight = minDepthOfTree(anotherRoot);
console.log(maxHeight);
console.log(minHeight);
