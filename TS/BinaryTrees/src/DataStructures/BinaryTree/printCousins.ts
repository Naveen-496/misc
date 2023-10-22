import { TreeNode } from "./TreeNode";

function findLevel(
  root: TreeNode | null,
  x: TreeNode,
  index: number,
  level: number
): number {
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

const printLevel = (
  root: TreeNode | null,
  node: TreeNode,
  level: number
): void => {
  if (root === null) {
    return;
  }

  if (level === 1) {
    console.log(root.data);
  }

  if (
    !(
      (root.left != null && root.left === node) ||
      (root.right != null && root.right === node)
    )
  ) {
    printLevel(root.left, node, level - 1);
    printLevel(root.right, node, level - 1);
  }
};

const printCousins = (root: TreeNode | null, node: TreeNode) => {
  if (root === null || root === node) {
    return;
  }

  const level = findLevel(root, node, 1, 0);
  printLevel(root, node, level);
};
