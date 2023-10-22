package com.binarysearch;

public class SingleElementInSortedArray {

    // the element in an array that has occured only once
    // [1, 1, 2, 2, 3, 3, 4, 5, 5]
    // except 4 all of them has occured more than once
    public int singleElementInSortedArray(int[] arr, int n) {

        for(int i = 0; i < n; i++) {
            if(n == 1) return arr[0];

            if(i == 0) {
                if(arr[i] != arr[i + 1]) return arr[i];
            }
            else if(i == n - 1){
                if(arr[i] != arr[i - 1]) return arr[i];
            } else {
                if(arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) return arr[i];
            }
        }
        return -1;
    }

    public int singleElementInSortedArrayBinary(int[] arr, int n) {

        if(n == 1) return arr[0];

        if(arr[0] != arr[1]) return arr[0];
        if(arr[n - 1] != arr[n - 2]) return arr[n - 1];

        int low = 1, high = n - 2;
        while( low <= high ) {
            int mid = (low + high) / 2;
            System.out.println(mid);
            if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]){
                System.out.println(arr[mid] + " && " + arr[mid - 1] + " && " + arr[mid + 1]);
                return arr[mid];
            }
            if ((mid % 2 == 1 && arr[mid] == arr[mid - 1]) || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
                // we are standing on the left half but the element is on the right half
                // so we need to eliminate the left half
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
        return -1;
    }

    // [1, 1, 2, 3, 3, 4, 5, 5]
    // length will always be odd
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 4, 4, 5, 5};
        int n = arr.length;
        SingleElementInSortedArray singleElementInSortedArray = new SingleElementInSortedArray();
        System.out.println(singleElementInSortedArray.singleElementInSortedArrayBinary(arr, n));
    }
}
