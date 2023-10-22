package com.binaryTrees;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DigitCombinations {

    public static void main(String[] args) {
        int[] digits = {1, 2, 3};
        List<List<Integer>> combinations = generateCombinations(digits);

        // Print the combinations
        for (List<Integer> combination : combinations) {
            System.out.println(combination);
        }
    }

    public static List<List<Integer>> generateCombinations(int[] digits) {
        List<List<Integer>> combinations = new ArrayList<>();
        Arrays.sort(digits); // Sort the digits to handle duplicate values properly
        backtrack(combinations, new ArrayList<>(), digits, 0);
        return combinations;
    }

    private static void backtrack(List<List<Integer>> combinations, List<Integer> tempList, int[] digits, int start) {
        combinations.add(new ArrayList<>(tempList)); // Add the current combination

        for (int i = start; i < digits.length; i++) {
            if (i > start && digits[i] == digits[i - 1]) {
                continue; // Skip duplicates to avoid duplicate combinations
            }
            tempList.add(digits[i]);
            backtrack(combinations, tempList, digits, i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }

}
