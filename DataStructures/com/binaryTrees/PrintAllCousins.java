package com.binaryTrees;

import java.util.ArrayList;
import java.util.List;

public class PrintAllCousins {

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();

        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        list1.add(1);
        list1.add(2);
        list2.add(1);
        list2.add(2);

        System.out.println( list1.subList(0, 2).equals(list2));

        PrintAllCousins printAllCousins = new PrintAllCousins();

       // System.out.println(printAllCousins.findParent(x, x.right.right.right).data);
    }

    public int getLevelOfNode(TreeNode root, TreeNode x, int index, int level) {

        // root is empty or the level is already found
        if( root == null || level != 0 ) {
            return level;
        }

        if( x == root ) {
            level = index;
        }

        level = getLevelOfNode(root.left, x, index + 1, level);
        level = getLevelOfNode(root.right, x, index + 1, level);

        return level;
    }

    public void printAllCousins(TreeNode root, TreeNode node) {

        if( root == null || root == node) {
            return;
        }

        int level = getLevelOfNode(root, node, 1, 0);
        printLevel(root, node, level);

    }

    public void printLevel(TreeNode root, TreeNode node, int level) {

        if( root == null ) {
            return;
        }

        if( level == 1 ) {
            System.out.print(root.data + " ");
        }
        // left or right  should not be null and it should not be the same node
        if( !(root.left != null && root.left == node
                || root.right != null && root.right == node )) {

             printLevel(root.left, node, level - 1);
             printLevel(root.right, node, level - 1);
        }
    }

    public TreeNode findParentHelper(TreeNode root, TreeNode node, TreeNode parent) {

         if( root == null || parent != null ) {
            // System.out.println("Parent not null");
             return parent;
         }

         if(( root.left != null && root.left == node) || (root.right != null && root.right == node )) {
           // System.out.println(root.left);
             parent = root;
         }

         parent = findParentHelper(root.left, node, parent);
         parent = findParentHelper(root.right, node, parent);

         return parent;

    }
    private TreeNode findParent(TreeNode root, TreeNode node) {
        TreeNode parent = null;
        parent = findParentHelper(root, node, parent);
        return parent;
    }

}
