
import BinaryTree from "./TreeNode";
import { TreeNode } from "./TreeNode";

function maxDepthOfTree(root: TreeNode | null): number {
   
   if( !root ) {
    return 0;
   }

   const leftMax = maxDepthOfTree(root.left);
   const rightMax = maxDepthOfTree( root.right );
    
   return 1 + Math.max( leftMax, rightMax );
}

function minDepthOfTree(root: TreeNode | null): number {
   
  if( !root ) {
   return 0;
  }

  const leftMax = maxDepthOfTree(root.left);
  const rightMax = maxDepthOfTree( root.right );
   
  return 1 + Math.min( leftMax, rightMax );
}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

const anotherRoot: TreeNode = binaryTree.getSmallBinaryTree();

const maxHeight = maxDepthOfTree(root);
const minHeight = minDepthOfTree(anotherRoot);
console.log(maxHeight);
console.log(minHeight);

