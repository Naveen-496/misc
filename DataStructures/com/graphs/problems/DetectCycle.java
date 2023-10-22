package com.graphs.problems;

import com.graphs.model.Graph;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

public class DetectCycle {

    static class Node {

        int first;
        int second;

        Node( int first, int second ) {
            this.first = first;
            this.second = second;
        }

    }


    private static boolean detectCycle(Map< Integer, ArrayList< Integer > > graph, boolean visited[], int sc ) {

        Queue<Node> queue = new LinkedList<>();
        queue.offer( new Node(sc, -1));

        while ( !queue.isEmpty() ) {

            int node = queue.peek().first;
            int parent = queue.peek().second;
            queue.poll();

            for( int adjacentNode: graph.get( node )) {

                if( visited[adjacentNode] == false ) {
                    queue.offer( new Node( adjacentNode, node ));
                    visited[adjacentNode] = true;
                } else if( parent != adjacentNode ) {
                     return true;
                }
            }
        }
        return false;
    }

    public static boolean isCycle( Map< Integer, ArrayList< Integer > > graph) {

         boolean[] visited = new boolean[7];
         for( int node: graph.keySet() ) {
              if( !visited[node]) {
                  if( detectCycle( graph, visited, node)) {
                      return true;
                  }
              }
         }
         return false;
    }

    public static void main(String[] args) {

        Graph graph = new Graph();
        Map< Integer, ArrayList< Integer > > undirectedGraph = graph.getUndirectedCyclicGraph();
        System.out.println( isCycle( undirectedGraph));
    }
}
