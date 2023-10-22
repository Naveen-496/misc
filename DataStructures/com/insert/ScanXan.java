package com.insert;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class ScanXan {
    public static void main(String[] args) throws FileNotFoundException {

        Scanner s = null;

        try{
            s = new Scanner(new BufferedReader(new FileReader("buffer.txt")));
          // optional  s.useDelimiter(",\\s*");

            while( s.hasNext()){
                System.out.println(s.next());
            }
        } finally {

        }
    }
}
