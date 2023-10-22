package com.binarysearch;

public class LowerBound {

    // smallest index such that arr[ind] >= target
    public int lowerBoundIte(int[] arr, int target, int n) {
        int ans = n;
        int low = 0, high = n - 1;
        while(low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    private void lower(int[] arr, int left, int right, int target, int ans){
        if(left > right) {
            return;
        }
        int mid = (left + right) / 2;

        if(arr[mid] >= target) {
            ans = mid;
            System.out.println(ans + " " + arr[mid]);
            lower(arr, left, mid - 1, target, ans);
        } else {
            lower(arr, mid + 1, right, target, ans);
        }
    }

    public int lowerBound(int[] arr, int target){
        int ans = arr.length;
        lower(arr, 0, arr.length - 1, target, ans);
        return ans;
    }

    public static void main(String[] args) {
        System.out.println("Hello, World!");
        LowerBound bound = new LowerBound();
        int[] arr = {1, 2, 4, 5, 7, 8, 9};
        int target = 5;
        System.out.println(bound.lowerBoundIte(arr, target, arr.length));
    }
}
