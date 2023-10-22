import { TreeNode } from "./TreeNode";

class Tuple {
  node: TreeNode;
  row: number;
  col: number;

  constructor(node: TreeNode, row: number, col: number) {
    this.node = node;
    this.row = row;
    this.col = col;
  }
}

class BoundaryTraversal {
  //  findVertex( root: TreeNode ): Array< Array< number > > {

  //   const result = [[1]];
  //   return result;
  //  }

  isLeafNode(root?: TreeNode | null): boolean {
    return root?.left === null && root?.right === null;
  }

  addLeftBoundary(root: TreeNode | null, res: Array<number>): void {
    if (root === null) return;
    let curr = root.left;
    while (curr !== null) {
      if (this.isLeafNode(curr) === false) res.push(curr.data);

      if (curr.left !== null) curr = curr.left;
      else curr = curr.right;
    }
  }

  addLeafNodes(root: TreeNode | null, res: Array<number>): void {
    if (root === null) return;

    if (this.isLeafNode(root)) {
      res.push(root.data);
    }

    this.addLeafNodes(root.left, res);
    this.addLeafNodes(root.right, res);
  }

  addRightBoundary(root: TreeNode | null, res: Array<number>): void {
    if (root === null) return;
    const temp: Array<number> = [];
    let curr = root.right;
    while (curr !== null) {
      if (this.isLeafNode(curr) === false) temp.push(curr.data);

      if (curr.right !== null) curr = curr.right;
      else curr = curr.left;
    }

    temp.reverse().forEach((data) => res.push(data));
  }

  boundaryTraversal(root: TreeNode | null): Array<number> {
    const result: Array<number> = [];
    if (root === null) return result;
    result.push(root.data);
    this.addLeftBoundary(root, result);
    this.addLeafNodes(root, result);
    this.addRightBoundary(root, result);
    return result;
  }
}
