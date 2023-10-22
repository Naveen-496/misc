package com.graphs.traversals;

import com.graphs.model.Graph;

import java.util.*;

public class BFS {

    public static void bfsTraversal(Map<String, ArrayList<String> > graph, String source ) {

        Queue<String> queue = new LinkedList<>();
        queue.offer( source );

        while ( !queue.isEmpty() ) {
             String current = queue.poll();
            System.out.print( current + " ");

            for( String neighbour : graph.get( current )) {
                 queue.offer( neighbour );
            }
        }
    }


    public static void main(String[] args) {

        Graph graph = new Graph();
        bfsTraversal(graph.getGraph(), "a");
    }
}
