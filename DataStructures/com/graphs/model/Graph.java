package com.graphs.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Graph {

    public Map< String, ArrayList<String>> getGraph() {

        Map< String, ArrayList<String>> graph = new HashMap<>();
        graph.put( "a", new ArrayList<>());
        graph.get("a").add("c");
        graph.get("a").add("b");

        graph.put( "b", new ArrayList<>());
        graph.get( "b").add("d");

        graph.put( "c", new ArrayList<>());
        graph.get( "c").add("e");

        graph.put( "d", new ArrayList<>());
        graph.get( "d").add("f");

        graph.put( "f", new ArrayList<>());
        graph.put( "e", new ArrayList<>());

        return graph;
    }

    public Map< String, ArrayList<String > > getUndirectedGraph() {
        Map< String, ArrayList<String> > graph = new HashMap<>();
        graph.put( "a", new ArrayList<>());
        graph.put( "b", new ArrayList<>());
        graph.put( "c", new ArrayList<>());
        graph.put( "d", new ArrayList<>());
        graph.put( "f", new ArrayList<>());
        graph.put( "e", new ArrayList<>());


        graph.get("a").add("c");
        graph.get("a").add("b");


       // graph.get( "b").add("d");
        graph.get( "b").add("a");


        graph.get( "c").add("e");
        graph.get( "c").add("a");

        graph.get( "d").add("f");
       // graph.get( "d").add("b");

        graph.get( "e").add( "c");

        graph.get( "f").add( "d");


        return graph;

    }

    public Map<Integer, ArrayList<Integer>> getUndirectedCyclicGraph() {

        Map< Integer, ArrayList<Integer> > graph = new HashMap<>();

        graph.put( 1, new ArrayList<>());
        graph.put( 2, new ArrayList<>());
        graph.put( 3, new ArrayList<>());
        graph.put( 4, new ArrayList<>());
        graph.put( 5, new ArrayList<>());
        graph.put( 6, new ArrayList<>());
        graph.put( 7, new ArrayList<>());

        graph.get(1).add(2);
        graph.get(1).add(3);

        graph.get(2).add(1);
        graph.get(2).add(5);

        graph.get(3).add(1);
        graph.get(3).add(4);
        graph.get(3).add(6);

        graph.get(4).add(3);

        graph.get(5).add(2);
        graph.get(5).add(7);

        graph.get(6).add(3);
        graph.get(6).add(7);

        graph.get(7).add(5);
        graph.get(7).add(6);


        return  graph;
    }


    public static void printGraphs( Map< String, ArrayList<String > > graph ) {

        for( String node: graph.keySet() ) {
            StringBuilder stringBuilder = new StringBuilder();
             stringBuilder.append(node).append(" ---> : [ ");
             for( String neighbour : graph.get( node )) {
                 stringBuilder.append(neighbour + ", ");
             }
             stringBuilder.append(" ]").replace(stringBuilder.lastIndexOf(","), stringBuilder.length() - 1, " ");
            System.out.println(stringBuilder);
        }
    }


    public static void main(String[] args) {

        printGraphs( new Graph().getUndirectedGraph());

    }


}
