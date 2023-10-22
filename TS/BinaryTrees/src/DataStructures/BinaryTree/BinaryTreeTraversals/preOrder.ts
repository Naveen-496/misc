import { TreeNode } from "../TreeNode";
import BinaryTree from "../TreeNode";

class PreOrder {
   
   constructor() {}

   // []
   // [1]
   // [3, 2]
   // [3, 5, 4]
   // [3, 5]
   // [3]
   // [7, 6]
   // [7]
   // []
   preOrder( root: TreeNode | null): number[] {
     
     const result: number[] = new Array();
     
     if( root === null ) {
       return result;
     }

     const stack: TreeNode[] = new Array();

     stack.push(root);
     
     while( stack.length > 0) {
       const topNode: TreeNode = stack.pop()!;
       result.push( topNode.data );

       if( topNode.right !== null ) {
        stack.push( topNode.right );
       }

       if( topNode.left !== null ) {
         stack.push( topNode.left );
       }
     }
     
     return result;
   }
}

const preOrder: PreOrder = new PreOrder();
const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();


console.log(preOrder.preOrder( root ));
