package com.insert.treetraversal;


import java.util.Stack;

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
public class PreOrderTraversal {

    TreeNode root;

    // root - left - right
    public static void preOrderTraversal(TreeNode root){
        if(root != null){
            System.out.print(root.val + " ");
            preOrderTraversal(root.left);
            preOrderTraversal(root.right);
        }
    }

    // left - root - right
    public static void inOrderTraversal(TreeNode root){
        if( root != null){
            inOrderTraversal(root.left);
            System.out.print(root.val + " ");
            inOrderTraversal(root.right);
        }
    }

    // left - right - root
    public static void postOrderTraversal(TreeNode root){
        if( root != null){
            postOrderTraversal(root.left);
            postOrderTraversal(root.right);
            System.out.print(root.val + " ");
        }
    }

    // Iterative aproach ( root - left - right)
    public static void preOrderIterative(TreeNode root){

        if( root == null){
            return;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while( !stack.isEmpty()){
            TreeNode curr = stack.pop();
            System.out.print(curr.val + " ");

            if( curr.right != null){
                stack.push(curr.right);
            }
            if( curr.left != null){
                stack.push(curr.left);
            }
        }
    }

    // Iterative approach ( left - root - right)
    public static void inOrderIterative(TreeNode root){
        if( root == null){
            return;
        }
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        while(curr != null || !stack.isEmpty()){

            while( curr != null){
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            System.out.print(curr.val + " ");
            curr = curr.right;
        }
    }

    // postOrder Iterative ( left - right- root)
    public static void postOrderIterative(TreeNode root){
        if( root == null){
            return;
        }

        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();

        stack1.push(root);

        while( !stack1.isEmpty()){

            TreeNode curr = stack1.pop();
            System.out.print(curr.val + " ");
            stack2.push(curr);

            if( curr.left != null){
                stack1.push(curr.left);
            }
            if( curr.right != null){
                stack1.push(curr.right);
            }
        }
        System.out.println();
        while( !stack2.isEmpty()){
            System.out.print( stack2.pop().val + " ");
        }
    }
    public static void main(String[] args) {

        TreeNode root = new TreeNode(1);
                 root.left = new TreeNode(2);
                 root.right = new TreeNode(3);
                 root.left.left = new TreeNode(4);
                 root.left.right = new TreeNode(5);
                 root.right.left = new TreeNode(6);
                 root.right.right = new TreeNode(7);

                 preOrderTraversal(root);
                 System.out.println();
                 inOrderTraversal(root);
                 System.out.println();
                 postOrderTraversal(root);
                 System.out.println();
                 preOrderIterative(root);
                 System.out.println();
                 inOrderIterative(root);
                 System.out.println();
                 postOrderIterative(root);
    }
}
