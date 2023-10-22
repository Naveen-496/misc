
public class SecondLargest{

  public static int findSecondLargest(int[] array){

    int largest = array[0];
    int secondLargest = largest;
    
    for(int i = 1; i < array.length; i++){
       if( array[i] > largest){
        secondLargest = largest;
        largest = array[i];
    }
    else if( array[i] > secondLargest && array[i] != largest){
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

  public static void main(String[] args) {

    int[] arr = new int[]{3, 2, 6, 5, 4, 9, 6};
    System.out.println(findSecondLargest(arr));
    
  }
  
}