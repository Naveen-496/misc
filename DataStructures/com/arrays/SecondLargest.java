package com.arrays;

public class SecondLargest {

    // better approach
    public static int secondLargestInArray(int[] arr, int n){

        int largest = arr[0];

        for( int i = 0; i < n; i++){
            if( arr[i] > largest)
                largest = arr[i];
        }

        int secondLargest = -1;

        for( int i = 0; i < n; i++){
            if( arr[i] > secondLargest && arr[i] != largest)
                secondLargest = arr[i];
        }
        return secondLargest;
    }

    // optimal solution
    public static int secondLargestInArrayOptimal(int[] arr, int n){

        int largest = arr[0];
        int secondLargest = -1; // bcoz if array has only 1 or 2 elements

        for( int i = 0; i < n; i++){
            if( arr[i] > largest ){
                secondLargest = largest;
                largest = arr[i];
            }

            else if( arr[i] > secondLargest && arr[i] != largest){
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }

    // third largest element

    public static int thirdLargest(int[] arr, int n){

        int firstLargest = arr[0];

        for( int i = 0; i < n; i++){
            if( arr[i] > firstLargest )
                firstLargest = arr[i];
        }

        int secondLargest = -1;

        for( int i = 0; i < n; i++){
            if( arr[i] > secondLargest && arr[i] != firstLargest){
                secondLargest  = arr[i];
            }
        }

        int thirdLargest = -1;
        for( int i = 0; i < n; i++){
            if( arr[i] > thirdLargest && arr[i] != secondLargest && arr[i] != firstLargest){
                thirdLargest = arr[i];
            }
        }

        return thirdLargest;
    }

    // third largest optimal solution
    public static int thirdLargestOptimal(int[] arr, int n){
        int firstLargest = arr[0];
        int secondLargest = -1;
        int thirdLargest = -1;

        for( int i = 0; i < n; i++){
            if( arr[i] > firstLargest){
                thirdLargest = secondLargest;
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }
            else if( arr[i] > secondLargest && arr[i] != firstLargest){
                thirdLargest = secondLargest;
                secondLargest = arr[i];
            }

            else if( arr[i] > thirdLargest && arr[i] != secondLargest && arr[i] != firstLargest){
                thirdLargest = arr[i];
            }
        }
        return thirdLargest;
    }

    // fourth largest element
    public static int fourthLargestOptimal(int[] arr, int n){

        int firstLargest = arr[0];
        int secondLargest = -1;
        int thirdLargest = -1;
        int fourthLargest = -1;

        for( int i = 0; i < n; i++){

            if( arr[i] > firstLargest){
                fourthLargest = thirdLargest;
                thirdLargest = secondLargest;
                secondLargest = firstLargest;
                firstLargest = arr[i];
            }
            else if( arr[i] > secondLargest && arr[i] != firstLargest){
                fourthLargest = thirdLargest;
                thirdLargest = secondLargest;
                secondLargest = arr[i];
            }
            else if( arr[i] > thirdLargest && arr[i] != secondLargest && arr[i] != firstLargest){
                fourthLargest = thirdLargest;
                thirdLargest = arr[i];
            }
            else if( arr[i] > fourthLargest && arr[i] != thirdLargest && arr[i] != secondLargest &&
                                                                          arr[i] != firstLargest){
                fourthLargest = arr[i];
            }
        }

        return fourthLargest;
    }

    public static void main(String[] args) {
        int[] array = new int[]{1, 2, 3, 2, 3, 4};
        int n = array.length;

//        System.out.println(secondLargestInArray(array, n));
//        System.out.println(secondLargestInArrayOptimal(array, n));
//        System.out.println(thirdLargest(array, n));

        System.out.println(thirdLargestOptimal(array, n));
        System.out.println(fourthLargestOptimal(array, n));
    }
}
