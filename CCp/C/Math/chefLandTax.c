
#include <stdio.h>

int main ( void ) {
   
    int chefIncome;
    printf("%s \n", "Enter chef's income : ");
    scanf("%d", &chefIncome);

    int taxes = ( chefIncome / 100 );
    printf("%d \n", taxes);

   printf("%d \n", ( chefIncome > 100 ?  ( chefIncome - ( 10 * taxes )) : chefIncome));
   return 0;
}
