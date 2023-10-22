import { TreeNode } from "./TreeNode";
import BinaryTree from "./TreeNode";



class SubTree {

   constructor() {}

   isSameTree( p?: TreeNode | null, q?: TreeNode| null ): boolean {
     
     if( p === null && q === null ) {
       return true;
     }

     if(( p === null && q !== null) || ( q === null && p !== null )) {
       return false;
     } 

     let leftSame = this.isSameTree(p?.left, q?.left);
     let rightSame = this.isSameTree(p?.right, q?.right);
     return p?.data === q?.data && leftSame && rightSame;
   }

   isSubTree(root: TreeNode | null, subTree: TreeNode | null ): boolean {
     
      if( !subTree ) {
        console.log("subtree is null");
        
        return true;
      } 
      if( !root ) {
        return false;
      }

      if( this.isSameTree(root, subTree )) {
        console.log("same trees");
        
         return true;
      }

      let leftSame = this.isSubTree(root.left, subTree.left); 
      let rightSame = this.isSubTree( root.right, subTree.right);

      return leftSame || rightSame;
   }
}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();
const subTree: TreeNode = binaryTree.getSmallBinaryTree();

console.log(root);
console.log(subTree);



const sub: SubTree = new SubTree();
console.log(sub.isSubTree( root, subTree));
