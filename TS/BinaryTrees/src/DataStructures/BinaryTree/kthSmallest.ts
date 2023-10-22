import { TreeNode } from "./TreeNode";

var kthSmallest = function ( root: TreeNode, k: number  ): number {
    
  const stack = [ root ];
  let curr: TreeNode | null = root;
  // inorder traversal of binary search tree gives the result in sorted order
  while( curr || stack.length > 0 ) {
     while( curr ) {
          stack.push( curr );
          curr = curr.left;
     }
     curr = stack.pop()!;
     k--;
     if( k === 0 ) return curr.data;
     curr = curr.right;
  }
  return k;
}