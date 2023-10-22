"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../../TreeNode"));
const Pair_1 = __importDefault(require("./Pair"));
class TopView {
    topView(root, dist, level, map) {
        if (root === null) {
            return;
        }
        if (!map.has(dist) || level < map.get(dist).second) {
            map.set(dist, Pair_1.default.of(root.data, level));
        }
        if (root.left !== null)
            this.topView(root.left, dist - 1, level + 1, map);
        if (root.right !== null)
            this.topView(root.right, dist + 1, level + 1, map);
    }
    getTopView(root) {
        const result = [];
        if (root === null) {
            return result;
        }
        const map = new Map();
        this.topView(root, 0, 1, map);
        for (const value of map.values()) {
            result.push(value.first);
        }
        return result;
    }
}
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
const topView = new TopView();
console.log(topView.getTopView(root));
