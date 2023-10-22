package com.binaryTrees;

public class DiameterOfBinaryTree {

    public static int diameter( TreeNode root, int diameter[] ) {

        if( root == null ) return 0;

        int leftMaxHeight = diameter( root.left, diameter );
        int rightMaxHeight = diameter( root.right, diameter );

        diameter[0] = Math.max( diameter[0], leftMaxHeight + rightMaxHeight + 1 );

        return 1 + Math.max( leftMaxHeight, rightMaxHeight );
    }


    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();
         int[] diameter = new int[1];
         diameter( root, diameter);
        System.out.println( diameter[0]);

    }
}
