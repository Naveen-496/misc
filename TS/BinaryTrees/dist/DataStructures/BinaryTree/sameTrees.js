"use strict";
/*
  Q. Given the roots of two binary trees p and q, write a function to check if they are the same or not.

  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class SameTree {
    constructor() { }
    isSameTree(p, q) {
        // both are null
        if (p === null && q === null) {
            return true;
        }
        // any one is null
        if ((p === null && q !== null) || (q === null && p !== null)) {
            return false;
        }
        let leftSame = this.isSameTree(p === null || p === void 0 ? void 0 : p.left, q === null || q === void 0 ? void 0 : q.left);
        let rightSame = this.isSameTree(p === null || p === void 0 ? void 0 : p.right, q === null || q === void 0 ? void 0 : q.right);
        return (p === null || p === void 0 ? void 0 : p.data) === (q === null || q === void 0 ? void 0 : q.data) && leftSame && rightSame;
    }
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const sametree = new SameTree();
const tree1 = binaryTree.getBinary();
const tree2 = binaryTree.getSmallBinaryTree();
console.log(sametree.isSameTree(tree1, tree2));
