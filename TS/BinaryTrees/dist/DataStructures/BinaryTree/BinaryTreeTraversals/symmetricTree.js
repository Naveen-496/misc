"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../TreeNode"));
class Symmetric {
    constructor() { }
    isSymmetric(p, q) {
        if (p === null || q === null) {
            return p === q;
        }
        return p.data === q.data
            && this.isSymmetric(p.left, q.right)
            && this.isSymmetric(p.right, q.left);
    }
    symmetricCheck(root) {
        if (root === null)
            return true;
        return this.isSymmetric(root.left, root.right);
    }
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const symmetric = new Symmetric();
console.log(symmetric.symmetricCheck(root));
