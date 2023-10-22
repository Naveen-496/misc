package com.binaryTrees.traversals;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// A preorder traversal is a traversal technique that will visit the nodes in a tree
// in a manner such that first the root of all the subtrees will be touched or visited or interacted with and then
// the left node of that subtree and then the right node

public class PreOrderTraversal {

    public void preOrderRecursive(TreeNode root) {
        if( root == null ) return ;

        System.out.print(root.data + " ");
        preOrderRecursive(root.left);
        preOrderRecursive(root.right);
    }

    public List<Integer> preOrderIterative(TreeNode root) {
        List<Integer> dataList = new ArrayList<>();
        Stack<TreeNode> s = new Stack<>();

        s.push(root);
        while( !s.isEmpty() ) {
            TreeNode topNode = s.peek();
            dataList.add(topNode.data);
            s.pop();

            if( topNode.right != null ) s.push( topNode.right);
            if( topNode.left != null ) s.push( topNode.left );

        }
        return dataList;
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();
        PreOrderTraversal preOrderTraversal = new PreOrderTraversal();
        preOrderTraversal.preOrderRecursive(root);
    }
}
