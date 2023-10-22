package com.binaryTrees;

import java.util.HashMap;
import java.util.Map;

public class BottomView {

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();

        BottomView bt = new BottomView();
        bt.testWhile();
    }

    public void testWhile() {
        int i = 0;
        int size = 1;

        while ( i++ < size) {

            // first compares and then immediately increases
            if(i == 1 )
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public void bottomView(TreeNode root, int dist, int level, Map<Integer, Pair<Integer, Integer>> map) {

        if (root == null) {
            return;
        }

        if (!map.containsKey(dist) || level >= map.get(dist).second) {
            map.put(dist, Pair.of(root.data, level));
        }

        bottomView(root.left, dist - 1, level + 1, map);
        bottomView(root.right, dist + 1, level + 1, map);
    }

    public void printBottomView(TreeNode root) {
        Map<Integer, Pair<Integer, Integer>> map = new HashMap<>();
        bottomView(root, 0, 0, map);

        for (Pair<Integer, Integer> it : map.values()) {
            System.out.print(it.first + " ");
        }
        System.out.println();
    }
}
