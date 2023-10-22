import { TreeNode } from "../TreeNode";
import BinaryTree from "../TreeNode";

class InOrder {
  // left - root - right
  constructor() {}

  inOrder(root: TreeNode | null): number[] {
    const result: number[] = [];

    if (root === null) {
      return result;
    }
    const stack: TreeNode[] = [];
    let curr: TreeNode | null = root;

    while (curr !== null || stack.length > 0) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop()!;
      result.push(curr.data);
      curr = curr.right;
    }

    return result;
  }
}
