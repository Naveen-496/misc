package com.insert;

import java.io.*;

public class BufferedIO {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new FileReader("buffer.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("buffout.txt"));

        String line ;

        while( (line = br.readLine()) != null){
            System.out.println(line);
        }
    }
}
