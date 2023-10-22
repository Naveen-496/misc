"use strict";
/*
Height-Balanced
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class BalancedBinaryTree {
    constructor() { }
    isBalanced(root) {
        let balanced = this.getHeight(root);
        return balanced[0];
    }
    getHeight(root) {
        if (!root)
            return [true, 0];
        let [leftBalanced, leftHeight] = this.getHeight(root.left);
        let [rightBalanced, rightHeight] = this.getHeight(root.right);
        let balanced = leftBalanced &&
            rightBalanced &&
            Math.abs(rightHeight - leftHeight) <= 1;
        return [balanced, 1 + Math.max(leftHeight, rightHeight)];
    }
    getIsBalanced(root) {
        let balancedInteger = [0];
        this.updateBalacedInteger(root, balancedInteger);
        if (balancedInteger[0] === -1) {
            return false;
        }
        return true;
    }
    updateBalacedInteger(root, balancedInteger) {
        if (!root) {
            return 0;
        }
        if (balancedInteger[0] === -1) {
            return -1;
        }
        const left = this.updateBalacedInteger(root.left, balancedInteger);
        const right = this.updateBalacedInteger(root.right, balancedInteger);
        if (Math.abs(left - right) > 1) {
            balancedInteger[0] = -1;
        }
        return 1 + Math.max(left, right);
    }
}
const balanced = new BalancedBinaryTree();
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
console.log(balanced.getIsBalanced(root));
