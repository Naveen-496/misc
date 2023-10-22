"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../TreeNode"));
class PreOrder {
    constructor() { }
    // []
    // [1]
    // [3, 2]
    // [3, 5, 4]
    // [3, 5]
    // [3]
    // [7, 6]
    // [7]
    // []
    preOrder(root) {
        const result = new Array();
        if (root === null) {
            return result;
        }
        const stack = new Array();
        stack.push(root);
        while (stack.length > 0) {
            const topNode = stack.pop();
            result.push(topNode.data);
            if (topNode.right !== null) {
                stack.push(topNode.right);
            }
            if (topNode.left !== null) {
                stack.push(topNode.left);
            }
        }
        return result;
    }
}
const preOrder = new PreOrder();
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
console.log(preOrder.preOrder(root));
