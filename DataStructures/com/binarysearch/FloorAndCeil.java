package com.binarysearch;

public class FloorAndCeil {

    // floor is the largest no in an array which is less than or equal to x
    // ceil is smallest no in an array that is greater than or equal to x

    public int ceilElement(int[] arr, int target, int n) {
        int low = 0, high = n - 1, ans = -1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] >= target) {
                ans = arr[mid];
                // we have found the smallest or equal element but we may still smallest if we go left
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    public int floorElement(int[] arr, int target, int n) {
        int low = 0, high = n - 1;
        int ans = -1;
        while(low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] <= target) {
                // we have to find the largest element so go right
                low = mid  + 1;
                ans = arr[mid];
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {

        int[] arr = {10, 15, 20, 25, 30, 40, 50, 60};
        int target = 22;
        FloorAndCeil floorAndCeil = new FloorAndCeil();
        System.out.println(floorAndCeil.ceilElement(arr, target, arr.length));
    }
}
