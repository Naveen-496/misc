package com.reddyscode.creating;

import java.util.stream.Stream;

public class StreamPipeline {

    public static void main(String[] args) {

        Stream<String> onceModifiedStream =
                Stream.of("abc1", "abc2", "abc3").skip(1);

        Stream<String> twiceModifiedStream =
                 Stream.of("abc1", "abc2", "abc3")
                         .skip(1)
                         .map( ele -> ele.substring(0, 3));
        twiceModifiedStream.forEach(System.out::println);
    }
}
