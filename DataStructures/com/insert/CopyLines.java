package com.insert;

import java.io.*;

public class CopyLines {

    public static void main(String[] args) throws IOException {

        BufferedReader inputStream = null;
        PrintWriter outputStream = null;

        try{
            inputStream = new BufferedReader(new FileReader("lineInput.txt"));
            outputStream = new PrintWriter( new FileWriter("lineOutput.txt"));

            String l;

            while( (l = inputStream.readLine()) != null){   // while( l != null)
                  if( l.contains("public"))
                       outputStream.println(l);
            }
        } finally {
            if(inputStream != null)
                inputStream.close();
            if(outputStream != null)
                outputStream.close();
        }
    }
}
