package com.binarysearch;

import java.util.Arrays;

public class FirstAndLastOccurrence {

    public int[] firstAndLastLinear(int[] arr, int target, int n) {
        int[] ans = {-1, -1};

        for(int i = 0; i < n; i++) {
            if(arr[i] == target) {
                if(ans[0] == -1) ans[0] = i;
                ans[1] = i;
            }
        }
        return ans;
    }

    public int[] firstAndLastBinary(int[] arr, int target, int n) {
       int lb = lowerBound(arr, target, n);
       if(lb == n || arr[lb] != target) return new int[]{-1, -1};
       return new int[]{lb, higherBound(arr, target, n) - 1};

    }

    public int lowerBound(int[] arr, int target, int n) {
        int low = 0, high = n - 1, ans = n;
        while (low <= high) {
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

    public int higherBound(int[] arr, int target, int n) {
        int low = 0, high = n - 1, ans = n;

        while (low <= high){
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
    private int findFirstOccurrence(int[] arr, int target, int n) {
        int low = 0, high = n - 1, first = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] == target) {
                first = mid;
                high = mid - 1;
            } else if(arr[mid] < target) {
                low = mid + 1;
            } else
                high = mid - 1;
        }
        return first;
    }

    private int findLastOccurrence(int[] arr, int target, int n) {
        int low = 0, high = n - 1, last = -1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if(arr[mid] == target) {
                last = mid;
                low = mid + 1;
            } else if(arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return last;
    }
    public int[] firstAndLastBin(int[] arr, int target, int n) {
        int first = findFirstOccurrence(arr, target, n);
        if(first == -1) return new int[]{-1, -1};
        int last = findLastOccurrence(arr, target, n);

        return new int[]{first, last};
    }

    public int countOccurrencesOfElement(int[] arr, int target, int n) {
        int[] ans = firstAndLastBin(arr, target, n);
        if(ans[0] == -1) return  0;
        else return ans[1] - ans[0] + 1;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, 6, 6, 6, 6, 6, 6};
        int target = 1;
        FirstAndLastOccurrence fndl = new FirstAndLastOccurrence();
        System.out.println(Arrays.toString(fndl.firstAndLastBin(nums, target, nums.length)));
        System.out.println(fndl.countOccurrencesOfElement(nums, target, nums.length));
    }
}
