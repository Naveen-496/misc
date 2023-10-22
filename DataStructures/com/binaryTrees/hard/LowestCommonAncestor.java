package com.binaryTrees.hard;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

public class LowestCommonAncestor {

    public TreeNode lowestCommonAncestor( TreeNode root, TreeNode p, TreeNode q ) {

        if( root == null || root == p || root == q ) {
            return root;
        }

        TreeNode left = lowestCommonAncestor( root.left, p, q);
        TreeNode right = lowestCommonAncestor( root.right, p, q);

        if( left == null ) {
            return right;
        } else if( right == null ) {
            return left;
        } else {
            return root;
        }
    }

    public static void main(String[] args) {

        BinaryTree bTree = new BinaryTree();
        TreeNode root = bTree.getBinaryTree();

        LowestCommonAncestor lowestCommonAncestor = new LowestCommonAncestor();
        TreeNode ancestor = lowestCommonAncestor.lowestCommonAncestor( root, root.left.left, root.left.right);
        System.out.println( ancestor.data );
    }
}
