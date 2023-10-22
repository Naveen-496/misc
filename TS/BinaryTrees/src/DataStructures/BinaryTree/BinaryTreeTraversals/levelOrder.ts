import { TreeNode } from "../TreeNode";
import BinaryTree from "../TreeNode";

class LevelOrder {
  constructor() {}

  levelOrder(root: TreeNode | null): number[] {
    const queue: TreeNode[] = [];
    const wrapList: number[] = [];

    if (root === null) {
      return wrapList;
    }
    queue.push(root);

    while (queue.length > 0) {
      const peekNode = queue.shift()!;
      if (peekNode.left !== null) {
        queue.push(peekNode.left);
      }
      if (peekNode.right !== null) {
        queue.push(peekNode.right);
      }

      wrapList.push(peekNode.data);
    }

    return wrapList;
  }
}
const binaryTree: BinaryTree = new BinaryTree();
const root: TreeNode = binaryTree.getBinary();

const levelOrder: LevelOrder = new LevelOrder();
console.log(levelOrder.levelOrder(root));
