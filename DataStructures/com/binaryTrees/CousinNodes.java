package com.binaryTrees;

import java.util.List;
import java.util.Map;

public class CousinNodes {

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();

        CousinNodes cousinNodes = new CousinNodes();
      //  System.out.println(cousinNodes.areTheySiblings(x, x.left, x.right.right));
        cousinNodes.testTimer();
    }

    public void testTimer() {

        long currentTime = System.currentTimeMillis();
        long expiryTime = System.currentTimeMillis() + (1 * 60 * 1000);
        long nowTime = 0;

        for( int i = 0; i < 100000; i++ ) {

        }
        nowTime = System.currentTimeMillis();

        System.out.println("time gap : " +  (expiryTime - nowTime));
    }

    private void updateLevelAndParent(TreeNode root, TreeNode parent, int level, NodeInfo x, NodeInfo y) {

        // base case
        if (root == null) {
            return;
        }

        updateLevelAndParent(root.left, root, level + 1, x, y);

        if (x.node == root) {
            x.parent = parent;
            x.level = level;
        }
        if (y.node == root) {
            y.parent = parent;
            y.level = level;
        }

        updateLevelAndParent(root.right, root, level + 1, x, y);
    }

    public boolean areTheyCousins(TreeNode root, TreeNode node1, TreeNode node2) {
        // base case
        if (root == null) {
            return false;
        }

        TreeNode parent = null;  // parent of root is null
        int level = 1;           // level of root is 1

        NodeInfo x = new NodeInfo(node1, level, parent);
        NodeInfo y = new NodeInfo(node2, level, parent);
        updateLevelAndParent(root, parent, level, x, y);
        return x.level == y.level && x.parent != y.parent;
    }

    public boolean areTheySiblings(TreeNode root, TreeNode node1, TreeNode node2) {

        if (root == null) {
            return false;
        }
        TreeNode parent = null;
        int level = 1;

        NodeInfo x = new NodeInfo(node1, level, parent);
        NodeInfo y = new NodeInfo(node2, level, parent);

        updateLevelAndParent(root, parent, level, x, y);

        return x.level == y.level && x.parent == y.parent;
    }


    public void printAllCousins(TreeNode root) {

    }

    static class NodeInfo {

        TreeNode node;
        int level;
        TreeNode parent;

        NodeInfo(TreeNode node, int level, TreeNode parent) {
            this.node = node;
            this.level = level;
            this.parent = parent;
        }
    }
}
