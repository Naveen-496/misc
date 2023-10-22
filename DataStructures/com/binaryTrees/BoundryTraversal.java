package com.binaryTrees;

import java.time.temporal.Temporal;
import java.util.ArrayList;
import java.util.List;

public class BoundryTraversal {

    private boolean isLeaf( TreeNode node ) {
        // if left and right nodes are null then it is a leaf node
        return (node.left == null && node.right == null);
    }

    private void addLeftBoundary( TreeNode node, List<Integer> res ) {
         TreeNode curr = node.left;

         while( curr != null ) {
             if( !isLeaf( curr )) res.add( curr.data );

              if( curr.left != null ) curr = curr.left;
              else curr = curr.right;
         }
    }

    private void addLeaves( TreeNode node, List< Integer > res ) {

        if( isLeaf( node )) {
            res.add( node.data );
            return;
        }

       if( node.left != null ) addLeaves( node.left, res );
       if( node.right != null )addLeaves( node.right, res );
    }

    private void addRightBoundary( TreeNode node, List< Integer > res ) {
        TreeNode curr = node.right;
        List<Integer> temp = new ArrayList<>();

        while( curr != null ) {
           if( !isLeaf(curr) ) temp.add( curr.data );
            if( curr.right != null ) curr = curr.right;
            else curr = curr.left;
        }

        for( int i = temp.size() - 1; i >= 0; i-- ) {
            res.add( temp.get( i ));
        }
    }
    public List<Integer> boundaryTraversal( TreeNode root) {

        List<Integer> result = new ArrayList<>();
        if( root == null ) return result;

        result.add(root.data);
        addLeftBoundary( root, result );
        addLeaves( root, result );
        addRightBoundary( root, result );

        return result;
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTreeForBoundary();

        BoundryTraversal bdt = new BoundryTraversal();
        bdt.boundaryTraversal( x ).forEach( data -> System.out.print( data + " "));
    }
}
