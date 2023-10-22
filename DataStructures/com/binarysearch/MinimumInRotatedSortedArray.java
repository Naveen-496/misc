package com.binarysearch;

public class MinimumInRotatedSortedArray {

    // to identify which half is sorted compare the mid element with left element
    // if the left element is less than mid element then left half is sorted
    // else right half is sorted
    // now if left is sorted then min element will be at the first
    // else if right is sorted then min element is at the mid itself

    // is left is not sorted then definitely right is sorted

    public int minInRotatedSortedArray(int[] arr, int n) {
        int low = 0, high = n - 1, ans = Integer.MAX_VALUE;

        while (low <= high) {
            int mid = (low + high) / 2;
            if(arr[low] <= arr[mid]) {
                ans = Math.min(ans, arr[low]);
                low = mid + 1;
            } else {
                ans = Math.min(ans, arr[mid]);
                high = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        MinimumInRotatedSortedArray mir = new MinimumInRotatedSortedArray();
        int[] arr = {6, 6, 7, 1, 2, 3, 4, 5, 6, 6};
        int n = arr.length;
        System.out.println(mir.minInRotatedSortedArray(arr, n));
    }
}


// if the array is sorted and rotated and if arr[low] <= arr[mid] then arr[low] is the min
// else if right half is sorted then arr[mid] is the smallest bcoz it's a first element