package com.binaryTrees.inorder;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

public class ValidateBST {

    TreeNode prev;

    public boolean validateBST(TreeNode node) {
        prev = null;
        return inOrderTraversal(node);
    }

    private boolean inOrderTraversal(TreeNode node) {

        if(node == null) return true;

        if( !inOrderTraversal(node.left))
            return false;

        if(prev != null && prev.data >= node.data)
            return false;

        prev = node;

        return inOrderTraversal(node.right);
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();

        ValidateBST validateBST = new ValidateBST();
        System.out.println(validateBST.validateBST(root));
    }
}
