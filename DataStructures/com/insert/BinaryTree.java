package com.insert;


public class BinaryTree {

    TreeNode root;

    public BinaryTree(){
        this.root = null;
    }

    public void insert(int val){
        TreeNode newNode = new TreeNode(val);

        if( root == null ){
            root = newNode;
           // return;
        }
        else {

            TreeNode curr = root;
            while(true){

                if( val < curr.val){
                     if( curr.left == null){
                         curr.left = newNode;
                         return;
                     }
                     curr = curr.left;
                }
                else {
                    if(curr.right == null ){
                        curr.right = newNode;
                        return;
                    }
                    curr = curr.right;
                }
            }
        }
    }

    public void printTree(){

        TreeNode curr = root;
        while( curr != null){
            System.out.println(curr.val);
            curr = curr.left;
        }
    }

    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        public TreeNode(int val){
            this.val = val;
            this.left  = null;
            this.right = null;
        }
    }
}
