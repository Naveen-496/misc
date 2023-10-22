public class LeftRotate {

  public static void leftRotate(int[] arr){
     
    int lastEle = arr[0];
    
    for( int i = 0; i < arr.length-1; i++){
      arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = lastEle;
  }

  public static void rightRotate(int[] arr){

     int firstEle = arr[arr.length-1];

     for( int i = arr.length - 1; i > 0; i--){
      arr[i] = arr[i-1];
     }

     arr[0] = firstEle;
  }
  
  public static void main(String[] args) {
    
    int[] arr = new int[]{1, 2, 3, 4, 5};
    leftRotate(arr);
    for(int i = 0; i < arr.length; i++){
      System.out.print(arr[i] + " ");
    }
    System.out.println();

    int[] arr2 = {2, 3, 4, 5, 1};
    rightRotate(arr2);

    for(int i = 0; i < arr2.length; i++){
      System.out.print(arr2[i] + " ");
    }
    System.out.println();
  }
}
