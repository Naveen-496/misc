package com.insert;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class NameCombinationGenerator {

    public static void main(String[] args) {
        List<String> names = readNamesFromFile("names.txt");
        if (names == null) {
            System.out.println("Failed to read names from file.");
            return;
        }

        int N = readIntegerInput("Enter the number of names in each set:");

        if (N <= 0 || N > names.size()) {
            System.out.println("Invalid input. N must be a positive integer less than or equal to the number of names in the list.");
            return;
        }

        Set<List<String>> combinations = generateCombinations(names, N);

        for (List<String> combination : combinations) {
            System.out.println(combination);
        }
    }

    private static List<String> readNamesFromFile(String filename) {
        List<String> names = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = br.readLine()) != null) {
                names.add(line.trim());
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
            return null;
        }

        return names;
    }

    private static int readIntegerInput(String prompt) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println(prompt);
            try {
                return Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a positive integer.");
            }
        }
    }

    private static Set<List<String>> generateCombinations(List<String> names, int N) {
        Set<List<String>> combinations = new HashSet<>();

        if (N == 1) {
            for (String name : names) {
                List<String> combination = Collections.singletonList(name);
                combinations.add(combination);

            }
            return combinations;
        }

        for (int i = 0; i < names.size(); i++) {
            String name = names.get(i);
            List<String> remaining = names.subList(i + 1, names.size());
           System.out.println(remaining);
            Set<List<String>> subcombinations = generateCombinations(remaining, N - 1);
            System.out.println(subcombinations);
            for (List<String> subcombination : subcombinations) {
                List<String> combination = new ArrayList<>();
                combination.add(name);
                combination.addAll(subcombination);
                combinations.add(combination);
            }
        }

        return combinations;
    }
}

