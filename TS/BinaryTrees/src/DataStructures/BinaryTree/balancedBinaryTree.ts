
/*
Height-Balanced
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

import BinaryTree from "./TreeNode";
import { TreeNode } from "./TreeNode";

class BalancedBinaryTree {

   constructor() {}

   isBalanced(root: TreeNode | null ): boolean {
        
       let balanced = this.getHeight(root);
       return balanced[0];
   }

   getHeight(root: TreeNode | null): any[] {
         
      if (!root) return [true, 0];

      let [leftBalanced, leftHeight] = this.getHeight(root.left);
      let [rightBalanced, rightHeight] = this.getHeight(root.right);
  
      let balanced =
          leftBalanced &&
          rightBalanced &&
          Math.abs(rightHeight - leftHeight) <= 1;
  
      return [balanced, 1 + Math.max(leftHeight, rightHeight)];
   }

  getIsBalanced(root: TreeNode): boolean {
     let balancedInteger = [0];
    this.updateBalacedInteger(root, balancedInteger);
     if(balancedInteger[0] === -1 ) {
      return false;
     }
     return true;
  }

   updateBalacedInteger(root: TreeNode | null,balancedInteger: number[] ): number {
     
      if( !root ) {
         return 0;
      }
      
      if( balancedInteger[0] === -1) {
         return -1;
      }
       
      const left = this.updateBalacedInteger(root.left, balancedInteger);
      const right = this.updateBalacedInteger(root.right, balancedInteger);

      if( Math.abs( left - right ) > 1) {
        balancedInteger[0] = -1;
      }

      return 1 + Math.max(left, right);

   }
  
  }

 const balanced = new BalancedBinaryTree();
 const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

console.log(balanced.getIsBalanced(root));
