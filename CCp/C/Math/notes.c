#include <stdio.h>

int main ( void ) {

  int noOfTestCases, noOfNotes;
  scanf("%d", &noOfTestCases);

  for( int i = 1; i <= noOfTestCases; i++ ) {
     
      scanf("%d", &noOfNotes);
      int noOffiveHundreds = ( noOfNotes * 4 );
      printf("%d", noOffiveHundreds );
  }
  
   return 0;
}
