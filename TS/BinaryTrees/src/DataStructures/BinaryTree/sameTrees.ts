/*    
  Q. Given the roots of two binary trees p and q, write a function to check if they are the same or not.

  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

import { TreeNode } from "./TreeNode";
import BinaryTree from "./TreeNode";

class SameTree {
   
  constructor() {}

  isSameTree(p?: TreeNode | null, q?: TreeNode | null ): boolean {
      
    // both are null
     if( p === null && q === null ) {
        return true;
     }

     // any one is null

     if( ( p === null && q !== null ) || ( q === null && p !== null )) {
        return false;
     }

     let leftSame = this.isSameTree( p?.left, q?.left);
     let rightSame = this.isSameTree( p?.right, q?.right);

     return p?.data === q?.data && leftSame && rightSame;
  }
}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

const sametree: SameTree = new SameTree();
const tree1 = binaryTree.getBinary();
const tree2 = binaryTree.getSmallBinaryTree();

console.log(sametree.isSameTree( tree1, tree2));
