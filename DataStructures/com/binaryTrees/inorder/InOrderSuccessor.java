package com.binaryTrees.inorder;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

public class InOrderSuccessor {

    TreeNode successor;
    public TreeNode immediateSuccessor(TreeNode node, TreeNode target) {
        successor = null;
        inOrderSuccessor(node, target);
        return successor;
    }

    private void inOrderSuccessor(TreeNode node, TreeNode target) {
        if(node == null) return;

        inOrderSuccessor(node.left, target);

        if(successor == null && node.data > target.data) {
            successor = node;
        }

        inOrderSuccessor(node.right, target);
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode node = binaryTree.getBinaryTree();
        InOrderSuccessor inOrderSuccessor = new InOrderSuccessor();
        System.out.println(inOrderSuccessor.immediateSuccessor(node, new TreeNode(4)).data);
    }
}
