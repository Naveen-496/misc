package com.graphs.problems;

import com.graphs.model.Graph;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ConnectedComponents {

    public static int connectedComponentsCount( Map<String, ArrayList<String > > graph) {

        int count = 0;
        Set< String > visited = new HashSet<>();
        for( String node: graph.keySet() ) {
             if( explore( graph, node, visited )) {
                 count++;
             }
        }
        return count;
    }

    private static boolean explore(Map< String, ArrayList<String >> graph,
                                   String node, Set<String> visited ) {

        if( visited.contains( node )) return false;
        visited.add( node );

        for( String neighbor : graph.get( node )) {
            explore( graph, neighbor, visited );
        }
        return true;
    }



    public static void main(String[] args) {

        Graph graph = new Graph();
        Map< String, ArrayList<String > > undirectedGraph = graph.getUndirectedGraph();
        System.out.println( connectedComponentsCount( undirectedGraph ));
    }
}
