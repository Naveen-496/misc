package com.binaryTrees;

public class BalancedBinaryTree {

    int dfsSearch(TreeNode root) {
        if(root == null) return 0;

        int leftHeight = dfsSearch(root.left);
        if(leftHeight == -1) return -1;
        int rightHeight = dfsSearch(root.right);
        if(rightHeight == -1) return -1;

        if(Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    }

    public boolean isBalanced(TreeNode root) {
        if(dfsSearch(root) == -1) return false;
        return true;
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();
        BalancedBinaryTree balancedBinaryTree = new BalancedBinaryTree();
        System.out.println(balancedBinaryTree.isBalanced(root));
    }
}
