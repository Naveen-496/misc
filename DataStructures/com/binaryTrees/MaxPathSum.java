package com.binaryTrees;


public class MaxPathSum {

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTreeForMaxSum();
        System.out.println(new MaxPathSum().maxPathSum(x));
    }

    public int maxSum( TreeNode root, int[] max) {

        if( root == null ) {
             return 0;
        }

        int leftMax = maxSum( root.left, max);
        int rightMax = maxSum( root.right, max);

        max[0] = Math.max( max[0], leftMax + rightMax + root.data );

        return root.data +  Math.max( leftMax, rightMax);
    }
    public int maxPathSum( TreeNode root ) {

        int[] max = new int[1];
        maxSum(root, max);
        return max[0];
    }
}
