"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../../TreeNode"));
const rightView = (root) => {
    const result = [];
    if (root === null) {
        return result;
    }
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const topNode = queue.shift();
            if (i === length - 1) {
                result.push(topNode.data);
            }
            if (topNode.left !== null)
                queue.push(topNode.left);
            if (topNode.right !== null)
                queue.push(topNode.right);
        }
    }
    return result;
};
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
console.log(rightView(root));
