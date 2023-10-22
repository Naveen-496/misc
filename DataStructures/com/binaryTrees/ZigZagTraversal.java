package com.binaryTrees;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class ZigZagTraversal {

    public static void printList(List<Integer> list ) {
         for( int i : list ) {
             System.out.print(i + " ");
         }
        System.out.println();
    }
    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTreeForZigZag();
        List< List< Integer > > ans = zigZagLevelOrder( x );

        for( List<Integer> list : ans ) {
            printList( list );
        }

    }

    public static List<List<Integer>> zigZagLevelOrder( TreeNode root ) {
        List< List< Integer > > wrapList = new ArrayList<>();

        Queue< TreeNode > nodeQueue = new LinkedList<>();

        nodeQueue.offer( root );
        boolean leftToRight = true;
        while( !nodeQueue.isEmpty() ) {

            int levelNodes = nodeQueue.size();
            List< Integer > subList = new ArrayList<>(levelNodes);

            for( int i = 0; i < levelNodes; i++ ) {
                TreeNode top = nodeQueue.poll();

                if( top.left != null ) {
                    nodeQueue.offer( top.left );
                }
                if( top.right != null ) {
                    nodeQueue.offer( top.right );
                }

                if( leftToRight )  subList.add(top.data);
                else subList.add(0, top.data );
            }
            leftToRight = !leftToRight;
            wrapList.add( subList );
        }
        return wrapList;
    }
}
