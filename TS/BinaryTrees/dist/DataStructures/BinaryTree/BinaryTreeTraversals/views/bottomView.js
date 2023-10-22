"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = __importDefault(require("../../TreeNode"));
const Pair_1 = __importDefault(require("./Pair"));
class BottomView {
    bottomView(root, dist, level, map) {
        if (root === null) {
            return;
        }
        if (!map.has(dist) || map.get(dist).second <= level) {
            map.set(dist, Pair_1.default.of(root.data, level));
        }
        this.bottomView(root.left, dist - 1, level + 1, map);
        this.bottomView(root.right, dist + 1, level + 1, map);
    }
    getBottomView(root) {
        const result = new Array();
        if (root === null)
            return result;
        const map = new Map();
        this.bottomView(root, 0, 1, map);
        for (const value of map.values()) {
            result.push(value.first);
        }
        return result;
    }
}
const bottomView = new BottomView();
const binaryTree = new TreeNode_1.default();
const root = binaryTree.getBinary();
console.log(bottomView.getBottomView(root));
