package com.reddyscode.examples;

import com.reddyscode.beans.Car;
import com.reddyscode.mockdata.MockData;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class GroupingData {

    @Test
    void simpleGrouping() throws Exception {

        Map<String , List<Car>> map = MockData.getCars()
                .stream()
                .collect(Collectors.groupingBy(Car::getMake));
        map.forEach( ( make, cars) -> {
            System.out.println("Make: " +  make );
            cars.forEach(System.out::println);
            System.out.println("--------------------");
        });
    }

    @Test
    void groupingAndCounting() throws Exception {
        List<String> names = List.of(
                "John",
                "Alex",
                "Marianne",
                "Mohammed",
                "Mohammed",
                "John",
                "Alex",
                "Alex"
        );

        Map<String, Long> map = names.stream()
                .collect(Collectors.groupingBy(
                        Function.identity(),
                        Collectors.counting()
                ));

        System.out.println( map );
    }
}
