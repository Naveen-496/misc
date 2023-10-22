import { TreeNode } from "../TreeNode";
import BinaryTree from "../TreeNode";

class Symmetric {
   
   constructor() {}

   isSymmetric( p: TreeNode | null, q: TreeNode | null ): boolean {
     
     if( p === null || q === null ) {
       return p === q;
     }

     return p.data === q.data 
            && this.isSymmetric( p.left, q.right)
            && this.isSymmetric( p.right, q.left);
   }

   symmetricCheck( root: TreeNode | null ): boolean {
     if( root === null ) return true;
     return this.isSymmetric( root.left, root.right );
   }
}

const binaryTree: BinaryTree = new BinaryTree();
const root: TreeNode = binaryTree.getBinary();

const symmetric: Symmetric = new Symmetric();
console.log(symmetric.symmetricCheck( root ));
