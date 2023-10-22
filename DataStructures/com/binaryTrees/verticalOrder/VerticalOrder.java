package com.binaryTrees.verticalOrder;


import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

import java.util.*;

class Tuple {

    TreeNode node;
    int row;
    int col;

    public Tuple( TreeNode node, int row, int col ) {
         this.node = node;
         this.row = row;
         this.col = col;
    }
}
public class VerticalOrder {

    public List< List< Integer > > findVertical( TreeNode root ) {

        TreeMap< Integer, TreeMap< Integer, PriorityQueue< Integer > > > map = new TreeMap<>();
        Queue< Tuple > queue = new LinkedList<>();

        queue.offer( new Tuple(root, 0, 0 ));

        while ( !queue.isEmpty() ) {

            Tuple tuple = queue.poll();
            TreeNode node = tuple.node;
            int vertex = tuple.row;
            int level = tuple.col;

            if( !map.containsKey( vertex )) {
                map.put( vertex, new TreeMap<>());
            }
            if( !map.get( vertex ).containsKey( level )) {
                map.get( vertex ).put( level, new PriorityQueue<>() );
            }
            map.get( vertex ).get( level ).offer( node.data );

            if( node.left != null ) queue.offer( new Tuple( node.left, vertex - 1, level + 1));
            if( node.right != null ) queue.offer( new Tuple( node.right, vertex + 1, level + 1));

        }

        List< List< Integer > > result = new ArrayList<>();

        for( TreeMap< Integer, PriorityQueue< Integer >> vertex : map.values()) {

              result.add( new ArrayList<>() );
             for( PriorityQueue< Integer > values: vertex.values()) {
                 while ( !values.isEmpty() ) {
                     result.get( result.size() - 1).add( values.poll());
                 }
             }
         }
        return result;
    }

    public static void main(String[] args) {

        VerticalOrder vtr = new VerticalOrder();
        BinaryTree binaryTree = new BinaryTree();
        TreeNode root = binaryTree.getBinaryTree();

    }


}
