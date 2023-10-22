#include <stdio.h>

int main( void ) {

   int noOfTestCases;
   printf("Enter the no of test cases : ");
   scanf( "%d", &noOfTestCases );

   for( int i = 1; i <= noOfTestCases; i++ ) {
     
      int patties, buns;

      printf("Enter the no of patties and buns available ");
       scanf("%d%d", &patties, &buns);

      int noOfBunsCanBeMade = patties < buns ? patties : buns;
      printf( "%s %d %s \n",  "Chef can make : ", ( noOfBunsCanBeMade > 0 ? noOfBunsCanBeMade : 0 ), "buns");
   }
}