package com.binaryTrees.traversals;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

import java.util.Stack;

public class PostOrder {

    public static void postOrderRec( TreeNode root ) {

        if( root == null ) return;

        postOrderRec( root.left );
        postOrderRec( root.right );
        System.out.print( root.data + " " );
    }

    public static void postOrderIter( TreeNode root ) {

        Stack< TreeNode > s = new Stack<>();
        TreeNode curr = root;
        TreeNode lastVisited = null;

        while (curr != null || !s.isEmpty() ) {

             while (curr != null ) {
                 s.push( curr );
                 curr = curr.left;
             }

             TreeNode topNode = s.peek();

             if( topNode.right != null && topNode.right != lastVisited ) {
                 curr = topNode.right;
             } else {
                 lastVisited = topNode;
                 System.out.print( topNode.data + " ");
                 s.pop();
             }
        }
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();

        postOrderRec( root );
        System.out.println();
        postOrderIter( root );
    }
}
