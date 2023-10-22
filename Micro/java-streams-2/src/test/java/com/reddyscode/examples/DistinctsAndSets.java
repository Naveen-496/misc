package com.reddyscode.examples;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

public class DistinctsAndSets {
    @Test
    void distinct() throws Exception {
        List<Integer> numbers = Arrays.asList(1, 1, 2, 2, 1, 3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9, 8);
        List<Integer> distincts = numbers.stream().distinct().toList();
        assertThat( distincts.size()).isEqualTo( 9 );
    }
    @Test
    void distinctSet() throws Exception{
        List<Integer> numbers = Arrays.asList(1, 1, 2, 2, 1, 3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9, 8);
        Set<Integer> integers = numbers.stream().collect(Collectors.toSet());
        assertThat( integers.size()).isEqualTo(9);
    }
    @Test
    void sumTest() throws Exception {
        List<Integer> numbers = Arrays.asList(1, 1, 2, 2, 1, 3, 4, 5, 4, 5, 6, 7, 7, 6, 8, 9, 9, 8);
         long sum = numbers.stream().distinct().reduce( 0, Integer::sum);
         assertThat( sum ).isEqualTo(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
    }
}
