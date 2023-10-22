"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class DiameterOfTree {
    constructor() { }
    getDiameter(root) {
        if (!root) {
            return 0;
        }
        const diameter = [0];
        this.getMaxDiameter(root, diameter);
        return diameter[0];
    }
    getMaxDiameter(root, diameter) {
        if (!root) {
            return 0;
        }
        const leftMax = this.getMaxDiameter(root.left, diameter);
        const rightMax = this.getMaxDiameter(root.right, diameter);
        diameter[0] = Math.max(diameter[0], leftMax + rightMax + 1);
        return 1 + Math.max(leftMax, rightMax);
    }
}
const diameterInstance = new DiameterOfTree();
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const diameter = diameterInstance.getDiameter(root);
console.log(diameter);
