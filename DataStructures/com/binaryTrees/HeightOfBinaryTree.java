package com.binaryTrees;

public class HeightOfBinaryTree {

    public static int height( TreeNode root ) {

         if( root == null ) return 0;

         int leftMaxHeight = height( root.left );
         int rightMaxHeight = height( root.right );

         return 1 + Math.max( leftMaxHeight, rightMaxHeight );
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();

        System.out.println( height( root ));

    }
}
