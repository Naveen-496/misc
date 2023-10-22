package com.insert;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import static java.lang.System.out;

public class PrintListNumbers {

    public static void main(String[] args) throws IOException {

        FileInputStream in = null;
        FileOutputStream out = null;

        try {

            in = new FileInputStream("names.txt");
            out = new FileOutputStream("hello.txt");

            int c;

            while((c = in.read()) != -1){
                out.write(c);
            }
            out.flush();
        }
        finally{
           if(in != null)
               in.close();
           if(out != null)
               out.close();

            System.out.println("Process Finished");
        }
    }
}
