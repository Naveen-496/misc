package com.reddyscode.creating;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;
import java.util.stream.LongStream;
import java.util.stream.Stream;

public class CreatingStreams {

    // when the list provided  is null then we can return an empty Stream
    public static Stream<String> streamOf(List<String> list) {
        return list == null || list.isEmpty() ? Stream.empty() : list.stream();
    }

    public static void main(String[] args) {

        // empty Stream creation from static method of Stream
        Stream<String> emptyStream = Stream.empty();

        // creating from a Collection
        Collection<String> collection = Arrays.asList("a", "b", "c");
        Stream<String> streamOfCollection = collection.stream();

        // stream of Array
        Stream<String > streamOfArray = Stream.of("a", "b", "c");

        // creating stream out of an existing array or a part of
        // an existing array
        String[] strings = new String[]{"a", "b", "c"};
        Stream<String> streamOfFullArray = Arrays.stream( strings );
        Stream<String> streamOfPartArray = Arrays.stream( strings, 1, 3);
       // streamOfPartArray.forEach(System.out::println);


        // using builder
        Stream<String > streamBulider =
                Stream.<String>builder().add("a").add("b").add("c").build();
//        streamBulider.forEach(System.out::println);

        // using Stream.generate() this method accepts a Supplier and creates
        // the stream from that Supplier function
        // the limit should be specified otherwise infinite stream
        // will be generated

        Stream<String> generatedStream =
                      Stream.generate(() -> "element").limit(10);
      //  generatedStream.forEach(System.out::println);

        // using Stream.iterate()
        Stream<Integer> streamIterator =
                          Stream.iterate(40, n -> n + 2).limit(20);

        // the first element in the resulting stream will be the first
        // argument passed to the iterator and then the following
        // elements will be computed based on the previous element

//        streamIterator.forEach(System.out::println);

        // java 8 also offers to create Streams out of
        // three primitives such as int, long, double

        // this will create a stream of integers from 1 to 9
        IntStream intStream = IntStream.range( 1, 10);
//        intStream.forEach(System.out::println);

        // this will create a stream from 1 to 10
        IntStream intStream1 = IntStream.rangeClosed(1, 10);
//        intStream1.forEach(System.out::println);

        LongStream longStream = LongStream.range(1, 100);
        LongStream longStream1 = LongStream.rangeClosed(1, 100);

        Random random = new Random();
        DoubleStream doubleStream = random.doubles(5);

        // stream of String
        Stream<String> streamOfString =
                Pattern.compile(",").splitAsStream("a,b,c");
    }
}
