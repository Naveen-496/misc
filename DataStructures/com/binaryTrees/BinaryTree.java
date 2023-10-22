package com.binaryTrees;

public class BinaryTree {

    public BinaryTree() {

    }

    public TreeNode getBinaryTreeForZigZag() {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);

        return root;
    }

    public TreeNode getBinaryTreeForBoundary() {

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);

        root.left.left = new TreeNode(4);
        root.left.left.left = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);

        return root;
    }

    public TreeNode getBinaryTreeForMaxSum() {
        TreeNode root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(15);
        root.right.left = new TreeNode(9);
        root.right.right = new TreeNode(6);

        return root;
    }

    public TreeNode getBinaryTree() {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);

        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(9);

        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(15);

//        root.right.right.right = new TreeNode(6);
//        root.right.right.right = new TreeNode(6);
        return root;
    }

    public TreeNode getAnotherBinaryTree(){
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.right.right = new TreeNode(9);
        root.right.right.right = new TreeNode(6);
        return root;
    }
    public int maxDepth(TreeNode root) {
        if( root == null ) return 0;

        int leftHeight = maxDepth(root.left);
        int rightHeight = maxDepth(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    public int countNodes(TreeNode root) {
        if(root == null) return 0;

       int  leftCount = countNodes(root.left);
       int rightCount = countNodes(root.right);
       if((leftCount + rightCount) % 2 == 0)
           System.out.println(leftCount + " " + rightCount + " " +  root.data);
       return 1 + (leftCount + rightCount);
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();
       // System.out.println(binaryTree.maxDepth(root));
        System.out.println(binaryTree.countNodes(root));
    }
}
