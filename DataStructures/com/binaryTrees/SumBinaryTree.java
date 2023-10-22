package com.binaryTrees;

public class SumBinaryTree {

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();
        SumBinaryTree sumBinaryTree = new SumBinaryTree();
        int result = sumBinaryTree.isSumBinaryTree(x);

        if( result != Integer.MIN_VALUE) {
            System.out.println(result);
            System.out.println("The given binary tree is sum binary tree");
        } else {
            System.out.println("The given binary tree is not sum binary tree");
        }
    }

    public int isSumBinaryTree(TreeNode root) {

        // base case : node = null
        if (root == null) {
            return 0;
        }

        // special case : leaf node
        if (root.left == null && root.right == null) {
            return root.data;
        }

        int left = isSumBinaryTree(root.left);
        int right = isSumBinaryTree(root.right);

        if (left != Integer.MIN_VALUE && right != Integer.MIN_VALUE && root.data == left + right) {
            return 2 * root.data;
        }
        return Integer.MIN_VALUE;

    }
}
