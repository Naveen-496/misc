package com.binaryTrees;

import java.util.HashMap;
import java.util.Map;

public class TopView {

    public void topView(TreeNode root, int dist, int level, Map<Integer, Pair<Integer, Integer>> map) {

        if( root == null ) {
            return;
        }

        if( !map.containsKey(dist) || level < map.get(dist).second) {
            map.put(dist, Pair.of(root.data, level));
        }

        topView(root.left, dist - 1, level + 1, map);

        topView(root.right, dist + 1, level + 1, map);
    }

    public void printTopView(TreeNode root) {
        Map<Integer, Pair<Integer, Integer>> map = new HashMap<>();
        topView(root, 0, 0, map);

        for( Map.Entry<Integer, Pair<Integer, Integer>> entry: map.entrySet() ) {
            System.out.print(entry.getValue().first + " ");
        }
        System.out.println();

        for(Pair<Integer, Integer> it: map.values()) {
            System.out.print(it.first + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();
       TopView tp = new TopView();
       tp.printTopView(x);
    }
}
