package com.graphs.model;

import java.util.ArrayList;

public class AdjList {

    public static void main(String[] args) {

        ArrayList< ArrayList< Integer > > list = new ArrayList<>();
        int n = 3, m = 3;

        for( int i = 0; i <= n; i++ ) {
             list.add( new ArrayList<>());
        }

        // 1 ---> 2
        list.get( 1 ).add( 2 );
        list.get( 2 ).add( 1 );

        // 2 ---> 3
        list.get( 2 ).add( 3 );
        list.get( 3 ).add( 4 );
        
        for( int i = 0; i < list.size(); i++ ) {
             for( int j = 0; j < list.get(i).size(); j++ ) {
                 System.out.println(list.get( i ).get( j ));
             }
        }
    }
}
