package com.binaryTrees;

public class InvertBinaryTree {

    public void swap(TreeNode root) {

        if( root == null ) {
            return;
        }

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
    }

    public void invertBinaryTree( TreeNode root ) {
         if( root == null ) {
             return;
         }

         swap(root);

         invertBinaryTree(root.left);
         invertBinaryTree(root.right);
    }

    public void printNodes(TreeNode root) {
        if(root == null ) {
            return;
        }

        System.out.print(root.data + " ");
        printNodes(root.left);
        printNodes(root.right);
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();
        InvertBinaryTree ivt = new InvertBinaryTree();
        ivt.printNodes(x);
        System.out.println();
        ivt.invertBinaryTree(x);
        ivt.printNodes(x);
        System.out.println();

    }
}
