package com.time;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class TimeFormatter {
    public static void main(String[] args) {
        // Get the current local time
        LocalTime currentTime = LocalTime.now();

        // Define the desired time format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm a");

        // Convert the local time to the desired format
        String formattedTime = currentTime.format(formatter);

        // Print the formatted time
        System.out.println("Formatted Time: " + formattedTime);
    }
}
