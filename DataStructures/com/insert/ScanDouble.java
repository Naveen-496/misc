package com.insert;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Locale;
import java.util.Scanner;

public class ScanDouble {
    public static void main(String[] args) throws FileNotFoundException {

        Scanner s = null;
        double sum = 0;

        try{
            s = new Scanner(new BufferedReader(new FileReader("usnumbers.txt")));
            s.useLocale(Locale.US);
            while(s.hasNext()){
                if(s.hasNextDouble())
                    sum += s.nextDouble();
                else
                    s.next();
            }
        } finally {
            if( s != null){
                s.close();
            }
        }
        System.out.println(sum);
    }
}
