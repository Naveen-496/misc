package com.reddyscode.creating;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class LazyInvocation {

    private static long counter;

    private static void wasCalled() {
        counter++;
    }

    public static void main(String[] args) {

        List<String> listStream =
                Arrays.asList("abc1", "abc2", "abc3");
        counter = 0;
        listStream.stream().filter(e -> {
                    //  wasCalled();
                    // counter++;
                    System.out.println("filter() was called");
                    return e.contains("2");
                })
                .map(e -> {
                    System.out.println("map() was called");
                    return e.toUpperCase();
                });

        long size = listStream.stream()
                .map(e -> {
                   wasCalled();
                    return  e.toUpperCase();
                })
                .skip(2).count();
        System.out.println(size);
        System.out.println(counter);


    }

}
