"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../TreeNode"));
class LevelOrder {
    constructor() { }
    levelOrder(root) {
        const queue = [];
        const wrapList = [];
        if (root === null) {
            return wrapList;
        }
        queue.push(root);
        while (queue.length > 0) {
            const peekNode = queue.shift();
            if (peekNode.left !== null) {
                queue.push(peekNode.left);
            }
            if (peekNode.right !== null) {
                queue.push(peekNode.right);
            }
            wrapList.push(peekNode.data);
        }
        return wrapList;
    }
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const levelOrder = new LevelOrder();
console.log(levelOrder.levelOrder(root));
