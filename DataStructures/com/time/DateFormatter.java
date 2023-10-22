package com.time;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatter {
    public static void main(String[] args) {
        // Get the current date
        Date currentDate = new Date();

        // Define the desired date format
        SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

        // Convert the date to the desired format
        String formattedDate = formatter.format(currentDate);

        // Print the formatted date
        System.out.println("Formatted Date: " + formattedDate);
    }
}
