package com.binarysearch;

public class SearchInRotatedArrayI {

    public int searchInRotatedArray(int[] arr, int target, int n) {
        int low = 0, high = n - 1, ans = n;
        while(low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] == target) return mid;
            // identify which side is sorted
            // to identify which side is sorted compare the current element with left and right element
            // [7, 8, 9, 1, 2, 3, 4, 5, 6]

            if(arr[low] == arr[mid] && arr[mid] == arr[high]) {
                low++; high--;
                continue;
            }
             if(arr[low] <= arr[mid]) {
                 if(arr[low] <= target && target <= arr[mid]) {
                     high = mid - 1;
                 } else {
                     low = mid + 1;
                 }
             } else {
                 if(arr[mid] <= target && target <= arr[high]) {
                     low = mid + 1;
                 } else {
                     high = mid - 1;
                 }
             }
        }
        return ans;
    }
    public static void main(String[] args) {
       int[] nums = {3, 1, 2, 3, 3, 3, 3};
       int target = 2;
       int n = nums.length;
       SearchInRotatedArrayI s1 = new SearchInRotatedArrayI();
        System.out.println(s1.searchInRotatedArray(nums, target, n));
    }
}
