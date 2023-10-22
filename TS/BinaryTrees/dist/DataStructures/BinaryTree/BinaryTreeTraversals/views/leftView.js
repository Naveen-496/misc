"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../../TreeNode"));
class LeftView {
    leftView(root, level, map) {
        if (root === null)
            return;
        if (!map.has(level)) {
            map.set(level, root.data);
        }
        this.leftView(root.left, level + 1, map);
        this.leftView(root.right, level + 1, map);
    }
    getLeftView(root) {
        if (root === null)
            return [];
        const map = new Map();
        this.leftView(root, 1, map);
        return [...map.values()];
    }
}
const leftView = new LeftView();
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
console.log(leftView.getLeftView(root));
