package com.reddyscode.creating;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ReferencingStream {

    public static void main(String[] args) {

        // we can instantiate a Stream, and have an accessible reference to
        // it as long as only intermediate operations are invoked on it
        // once the terminal operations are invoked then the
        // stream is inaccessible
        List<String> strings =
                Stream.of("a", "d", "c", "b")
                        .filter( element -> element.contains("b") || element.contains("d"))
                        .collect(Collectors.toList());
        Optional<String> anyElement = strings.stream().findAny();
        Optional<String> firstElement = strings.stream().findFirst();
        System.out.println( anyElement.get());

        // gives an illegalStateException as the terminal op has already
        // been invoked on the stream
      //  Optional<String> firstElement = stream.findFirst();
      //  System.out.println( firstElement.get());


    }
}
