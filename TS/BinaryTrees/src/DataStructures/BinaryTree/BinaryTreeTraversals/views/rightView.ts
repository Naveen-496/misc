import { TreeNode } from "../../TreeNode";
import BinaryTree from "../../TreeNode";


const rightView = ( root: TreeNode| null ): number[] => {
   
  const result: number[] = [];

   if( root === null ) {
    return result;
   }
  const queue : TreeNode[] = [];

  queue.push( root );

  while( queue.length > 0 ) {
     
    const length = queue.length;

    for( let i = 0; i < length; i++ ) {
     const topNode = queue.shift()!;

     if( i === length - 1) {
      result.push( topNode.data );
     }

     if( topNode.left !== null ) queue.push( topNode.left );
     if( topNode.right !== null ) queue.push( topNode.right );

    }
     
  }
  return result;

}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

console.log( rightView( root ));
