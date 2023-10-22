package com.binarysearch;

public class NoOfTimesArrayRotated {

    public int noOfTimesArrayRotated(int[] arr, int n) {
        int low = 0, high = n - 1, ans = n, index = -1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if(arr[low] <= arr[high]) {
                if(arr[low] <= ans) {
                    ans = arr[low];
                    index = low;
                }
                break;
            }
            if(arr[low] <= arr[mid]) {
                if(arr[low] <= ans) {
                    ans = arr[low];
                    index = low;
                }
                low = mid + 1;
            } else {
                if(arr[mid] <= ans) {
                    ans = arr[mid];
                    index = mid;
                }
                high = mid - 1;
            }
        }
        return index;
    }

    public static void main(String[] args) {
        NoOfTimesArrayRotated noOfTimesArrayRotated = new NoOfTimesArrayRotated();
        int[] arr = {3, 4, 5, 1, 2};
        int n = arr.length;
        System.out.println(noOfTimesArrayRotated.noOfTimesArrayRotated(arr, n));
    }
}
