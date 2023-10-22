package com.insert;

class TreeNode {
    int val;
    TreeNode left;

    TreeNode right;

    public TreeNode(int val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree1 {

    TreeNode root;

    public void preOrderTraversal(TreeNode node){

        if( node == null){
            return;
        }

        System.out.print(node.val + " ");
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }

}
public class PreOrderTraversal {

    public static void main(String[] args) {

        BinaryTree1 tree = new BinaryTree1();
        tree.root = new TreeNode(1);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);
        tree.root.left.left = new TreeNode(5);
        tree.root.left.right = new TreeNode(6);
        tree.root.right.left = new TreeNode(7);
        tree.root.right.right = new TreeNode(8);

        System.out.println("PreOrder Traversal Example: ");
        tree.preOrderTraversal(tree.root);
    }
}
