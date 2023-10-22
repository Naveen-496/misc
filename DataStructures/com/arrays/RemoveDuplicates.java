package com.arrays;

import java.util.*;

public class RemoveDuplicates {

    // use HashMap or HashSet
  public static int removeDuplicates(int[] arr, int n){
      HashMap<Integer, Integer> hMap = new HashMap<>();

      for( int i = 0; i < n; i++){
          if(!hMap.containsKey((arr[i]))){
              hMap.put(arr[i], arr[i]);
          }
      }
      int length = hMap.size();
      ArrayList<Integer> ans = new ArrayList<>();
      int[] res = new int[length];
      for(int key: hMap.keySet()){
          ans.add(hMap.get(key));
      }

      int index = 0;
      for(int key: hMap.keySet()){
          arr[index] = hMap.get(key);
          index++;
      }
      return index;

  }

  // using TreeSet

    public static int removeDuplicatesUsingSet(int[] arr, int n){
        Set<Integer> hset = new TreeSet<>();

        for( int i = 0; i < n; i++){
            hset.add((arr[i]));
        }

        int index = 0;
        for( int num: hset){
            arr[index] = num;
            index++;
        }
        return index;
    }

    // using HashSet

    public static int removeDupsUsingHashSet(int[] arr, int n){
      Set<Integer> hSet = new HashSet<>();

      for( int i = 0; i < n; i++){
          if(!hSet.contains(arr[i])){
              hSet.add(arr[i]);
          }
      }

      int index = 0;
      for( int num: hSet){
          arr[index] = num;
          index++;
      }
      return index;
     }

     // optimal solution
    public static int removeDupsOptimal(int[] arr, int n){

        int i = 0;

        for( int j = 1; j < n; j++){
            if(arr[i] != arr[j]){
                arr[++i] = arr[j];
            }
        }

        return i+1;
    }
    public static void main(String[] args) {

        int[] array = new int[]{1, 1, 2, 2, 2, 3, 3, 4, 5};
        int n = array.length;

//        System.out.println(removeDuplicates(array, n));
//        System.out.println(removeDuplicatesUsingSet(array, n));
//        System.out.println(removeDupsUsingHashSet(array, n));

        System.out.println(removeDupsOptimal(array, n));

    }
}
