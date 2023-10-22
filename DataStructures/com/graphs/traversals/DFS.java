package com.graphs.traversals;

import com.graphs.model.Graph;

import java.util.ArrayList;
import java.util.Map;
import java.util.Stack;

public class DFS {

    public static void dfsTraversalIter(Map< String , ArrayList<String>> graph, String source ) {

        Stack<String > stack = new Stack<>();
        stack.push( source );

        while ( !stack.isEmpty() ) {
            String current = stack.pop();
            System.out.print(current + " ");
            for( String neighbour: graph.get( current ) ) {
                stack.push( neighbour );
            }
        }
        System.out.println();
    }

    public static void dfsRecursive( Map< String, ArrayList< String >> graph, String source ) {

        System.out.print(source + " ");
        for( String neighbour : graph.get( source )) {
             dfsRecursive( graph, neighbour );
        }

    }



    public static void main(String[] args) {

        Graph graph = new Graph();
        dfsRecursive( graph.getGraph(), "a");
    }
}
