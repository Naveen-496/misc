package com.binaryTrees.inorder;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

public class KthSmallestElement {

    int count;
    int result;

    public int kthSmallest(TreeNode node, int k) {

        count = 0; result = 0;
        inOrderTraversal(node, k);
        return result;
    }

    private void inOrderTraversal(TreeNode node, int k) {
        if(node == null) return;

        inOrderTraversal(node.left, k);
        count++;
        if(count == k) {
            result = node.data;
            return;
        }

        inOrderTraversal(node.right, k);
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode node = binaryTree.getBinaryTree();
        KthSmallestElement ksm = new KthSmallestElement();
        System.out.println(ksm.kthSmallest(node, 3));
    }
}
