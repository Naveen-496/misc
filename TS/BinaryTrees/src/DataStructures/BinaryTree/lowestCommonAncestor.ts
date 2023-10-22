
import { TreeNode } from "./TreeNode";



var lowestCommonAncestor = function( root: TreeNode | null , p: TreeNode, q: TreeNode ): TreeNode | null {
  
  if( !root ) {
   return null;
  }
   const less = ( p.data < root.data && q.data < root.data );
   if( less ) return lowestCommonAncestor( root.left, p, q);

   const bigger = ( p.data > root.data && q.data > root.data );
   if( bigger ) return lowestCommonAncestor( root.right, p, q);

   else return root;
}

