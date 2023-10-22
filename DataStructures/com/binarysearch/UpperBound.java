package com.binarysearch;

public class UpperBound {

    public int upperBound(int[] arr, int target, int n) {
        int ans = n;
        int low = 0, high = n - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] > target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 7, 8, 9};
        int target = 5;
        UpperBound bound = new UpperBound();
        System.out.println(bound.upperBound(arr, target, arr.length));
    }
}
