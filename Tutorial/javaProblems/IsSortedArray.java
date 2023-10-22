public class IsSortedArray {

  public static boolean isSortedArray(int[] array){

    if(array.length == 1)
    return true;

    for( int i = 0; i < array.length - 1; i++){
      if( array[i] > array[i+1]){
        return false;
      }
    }
    return true;
  }
  public static void main(String[] args) {
    
    int[] arr = new int[]{1, 2, 3, 4, 5, 2};
    System.out.println(isSortedArray(arr));
  }
  
}
