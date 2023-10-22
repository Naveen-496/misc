
import BinaryTree from "./TreeNode"; 
import { TreeNode } from "./TreeNode";

function swap(root: TreeNode) {
   
   if( !root ) {
      return;
   } 

   const temp: TreeNode | null= root.left;
   root.left = root.right;
   root.right = temp;


}
function invertTree(root?: TreeNode | null): TreeNode | null {

  let temp: TreeNode | null;
   
  if ( !root ) {
    return null;
  }

  if( root.left || root.right ) {
     temp = root.left;
     root.left = invertTree( root.right );
     root.right = invertTree( temp );
  }
  return root;
}

function preOrderTraversal( root: TreeNode | null, res: number[]) {
   
   if( !root ) {
     return ;
   }
   res.push(root.data);
    preOrderTraversal(root.left, res);
    preOrderTraversal(root.right, res);
}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();
let res: number[] = []
preOrderTraversal(root,res);
console.log(res);
res = [];
invertTree(root);
preOrderTraversal(root, res);
console.log(res);