import BinaryTree from "./TreeNode";
import { TreeNode } from "./TreeNode";

class DiameterOfTree {
   
   constructor() {}

   getDiameter(root: TreeNode | null ): number {
     
    if( !root ) {
      return 0;
    }
     const diameter: number[] = [0];
     this.getMaxDiameter(root, diameter);
     return diameter[0];
     
   }

    getMaxDiameter(root: TreeNode | null, diameter: number[]): number {
       
      if( !root ) {
        return 0;
      }
      
      const leftMax: number = this.getMaxDiameter(root.left, diameter);
      const rightMax: number = this.getMaxDiameter(root.right, diameter);

       diameter[0] = Math.max( diameter[0], leftMax + rightMax + 1);

       return 1 + Math.max( leftMax, rightMax);
    }
 }

 const diameterInstance = new DiameterOfTree();
 const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

const diameter = diameterInstance.getDiameter(root);
console.log(diameter);
