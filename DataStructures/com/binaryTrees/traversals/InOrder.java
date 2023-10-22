package com.binaryTrees.traversals;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

import java.util.Stack;

// left - root - right
// first go to left subtree then root and then right
// a depth first traversal should be done
public class InOrder {

    public static void inOrderRec( TreeNode root ) {

        if( root == null ) return;

        inOrderRec( root.left);
        System.out.print( root.data + " ");
        inOrderRec( root.right );

    }

    public static void inOrderIter( TreeNode root ) {

        Stack<TreeNode> s = new Stack<>();
        TreeNode curr = root;
        while ( curr != null || !s.isEmpty() ) {

            while (curr != null ) {
                s.push( curr );
                curr = curr.left;
            }

            curr = s.pop();
            System.out.print( curr.data + " ");
            curr = curr.right;
        }

    }



    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();

        inOrderRec( root );
        System.out.println();
        inOrderIter( root );
    }
}
