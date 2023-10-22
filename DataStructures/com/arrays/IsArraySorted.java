package com.arrays;

public class IsArraySorted {

    public static boolean isArraySorted(int[] arr, int n){

        for(int i = 0; i < n-1; i++){
            if( arr[i+1] < arr[i])
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int[] array = new int[]{1, 2, 2, 3, 3, 4};
        int n = array.length;

        System.out.println(isArraySorted(array, n));
    }
}
