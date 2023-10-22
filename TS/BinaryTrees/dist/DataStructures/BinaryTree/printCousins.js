"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLevel(root, x, index, level) {
    if (root === null || level != 0) {
        return level;
    }
    if (root === x) {
        level = index;
    }
    level = findLevel(root.left, x, index + 1, level);
    level = findLevel(root.right, x, index + 1, level);
    return level;
}
const printLevel = (root, node, level) => {
    if (root === null) {
        return;
    }
    if (level === 1) {
        console.log(root.data);
    }
    if (!((root.left != null && root.left === node) ||
        (root.right != null && root.right === node))) {
        printLevel(root.left, node, level - 1);
        printLevel(root.right, node, level - 1);
    }
};
const printCousins = (root, node) => {
    if (root === null || root === node) {
        return;
    }
    const level = findLevel(root, node, 1, 0);
    printLevel(root, node, level);
};
