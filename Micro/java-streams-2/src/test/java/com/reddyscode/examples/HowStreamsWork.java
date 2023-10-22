package com.reddyscode.examples;

import com.reddyscode.mockdata.MockData;
import org.junit.jupiter.api.Test;

import java.util.stream.Collectors;

public class HowStreamsWork {

    @Test
    public void intermediateAndTerminalOps() throws Exception {

        System.out.println(
                MockData.getCars()
                        .stream()
                        .filter( car ->  {
                            System.out.println("filter car " + car);
                            return car.getPrice() < 50000;
                        })
                        .limit(10)
                        .map( car -> {
                            System.out.println("Mapping car " + car);
                            return car.getPrice();
                        })
                        .map( price -> {
                            System.out.println("Mapping price " + price);
                            return price + 0;
                        }).collect(Collectors.toList())
        );
    }
}
