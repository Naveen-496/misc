import { TreeNode } from "./TreeNode";

const preOrder = [3, 9, 20, 15, 7];
const inOrder =  [9, 3, 15, 20, 7];



var constructBinaryTree = ( preOrder: number[], inOrder: number[] ): TreeNode | null => {
      
       if( !preOrder.length || !inOrder.length ) {
         return null;
       }

       const root = new TreeNode( preOrder[0]);
       const mid = inOrder.indexOf( preOrder[0]);

       root.left = constructBinaryTree( preOrder.slice(1, mid + 1), inOrder.slice( 0, mid ));
       root.right = constructBinaryTree( preOrder.slice( mid + 1), inOrder.slice( mid + 1));

       return root;
}

const preOrderTraversal = ( root: TreeNode | null ) => {
    if( root === null ) return;

    console.log( root.data  );
    preOrderTraversal( root.left );
    preOrderTraversal( root.right );
} 

preOrderTraversal( constructBinaryTree( preOrder, inOrder));