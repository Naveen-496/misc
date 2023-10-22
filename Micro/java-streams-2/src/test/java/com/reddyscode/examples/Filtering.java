package com.reddyscode.examples;

import com.reddyscode.beans.Car;
import com.reddyscode.mockdata.MockData;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

public class Filtering {
    @Test
    void filterByPriceAndColorTest() throws Exception {
        List<Car> cars = MockData.getCars();

        Predicate<Car> priceAndColorPredicate = car -> car.getPrice() < 20_000 && car.getColor().equals("Yellow");
      //  Predicate<Car> colorPredicata = car -> car.getColor().equals("Yellow");

        cars.stream()
                .filter( priceAndColorPredicate )
                .collect(Collectors.toList())
                .forEach(System.out::println );
    }

    @Test
    void dropWhile() throws Exception {
        // dropwhile drops the elements until the condition is satisfied and then
        // takes the remaining elements
        List<Integer> nums = List.of( 2, 4, 6, 8, 9, 10, 12);
        System.out.println( " Using filter ");
        nums.stream()
                .filter( n -> n % 2 == 0)
                .toList()
                .forEach( n -> System.out.print( n + " "));
        System.out.println();
        System.out.println("Using dropwhile");
        nums.stream()
                .dropWhile( n -> n % 2 == 0)
                .toList()
                .forEach( n -> System.out.print( n + " "));
    }

    @Test
    void  takeWhile() throws Exception {
        List<Integer> nums = List.of( 2, 4, 6, 8, 9, 10, 12);
        System.out.println("Using filter");
        nums.stream()
                .filter( n -> n % 2 == 0)
                .toList()
                .forEach(n -> System.out.print( n + " "));
        System.out.println();
        System.out.println("Using take while ");
        nums.stream()
                .takeWhile( n -> n % 2 == 0)
                .toList()
                .forEach( n -> System.out.print( n + " "));
    }
    @Test
    void findFirst() throws Exception {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int result = Arrays.stream( numbers ).
                filter(n -> n == 10).
                findFirst()
                .orElse( -1 );
        assertThat( result ).isEqualTo(-1);
        System.out.println( result );
    }

    @Test
    void findAny() throws Exception {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int result = Arrays.stream( numbers )
                .filter( n -> n == 10)
                .findAny()
                .orElse( -1 );
        assertThat( result ).isEqualTo( 10);
        System.out.println( result );
    }

    @Test
    void allMatch() throws Exception {
        int[] evens = { 2, 4 ,6, 8, 10};
        boolean result = Arrays.stream( evens )
                .allMatch( n -> n % 2 == 0);
        assertThat( result ).isEqualTo( true);
        System.out.println( result );
    }

    @Test
    void  anyMatch() throws Exception {
        int[] nums = { 2, 4, 6, 8, 11};
        boolean result = Arrays.stream( nums )
                .anyMatch( n -> !(n % 2 == 0));

        assertThat( result ).isEqualTo( true );
        System.out.println( result );
    }
}
