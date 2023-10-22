import { TreeNode } from "../../TreeNode";
import BinaryTree from "../../TreeNode";
import Pair from "./Pair";

class LeftView {
   
   private leftView( root: TreeNode | null, level: number, map: Map<number, number> ): void {
     
     if( root === null ) return;

     if( !map.has( level )) {
       map.set( level, root.data );
     }

     this.leftView( root.left, level + 1, map );
     this.leftView( root.right, level + 1, map);
   }

   getLeftView( root: TreeNode | null ): Array< number > {
      
    
    if( root === null ) return [];

     const map: Map<number, number> = new Map();
     this.leftView( root, 1, map);

      return [...map.values()];
   }
}

const leftView: LeftView = new LeftView();
const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

console.log(leftView.getLeftView( root ));
