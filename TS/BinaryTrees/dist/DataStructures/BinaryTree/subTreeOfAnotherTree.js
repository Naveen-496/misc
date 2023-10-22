"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("./TreeNode"));
class SubTree {
    constructor() { }
    isSameTree(p, q) {
        if (p === null && q === null) {
            return true;
        }
        if ((p === null && q !== null) || (q === null && p !== null)) {
            return false;
        }
        let leftSame = this.isSameTree(p === null || p === void 0 ? void 0 : p.left, q === null || q === void 0 ? void 0 : q.left);
        let rightSame = this.isSameTree(p === null || p === void 0 ? void 0 : p.right, q === null || q === void 0 ? void 0 : q.right);
        return (p === null || p === void 0 ? void 0 : p.data) === (q === null || q === void 0 ? void 0 : q.data) && leftSame && rightSame;
    }
    isSubTree(root, subTree) {
        if (!subTree) {
            console.log("subtree is null");
            return true;
        }
        if (!root) {
            return false;
        }
        if (this.isSameTree(root, subTree)) {
            console.log("same trees");
            return true;
        }
        let leftSame = this.isSubTree(root.left, subTree.left);
        let rightSame = this.isSubTree(root.right, subTree.right);
        return leftSame || rightSame;
    }
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const subTree = binaryTree.getSmallBinaryTree();
console.log(root);
console.log(subTree);
const sub = new SubTree();
console.log(sub.isSubTree(root, subTree));
