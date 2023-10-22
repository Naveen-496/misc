
#include <iostream>

bool isPrime( int number ) {
   
    if( number <= 1 ) 
      return false;

    if( number <= 3 ) 
      return true;  
    
    if( number % 2 == 0 || number % 3 == 0 )
       return false;

     for( int i = 5; i * i <= number; i += 6 ) {
       
        if( number % i == 0 ) 
            return false;
     }  

     return true;
}

int main () {
   
    int number;
    std::cout << "Enter the number" << std::endl;
    std::cin >> number;

    std::cout << "Prime numbers upto " << number << " are : ";

    for ( int i = 2; i <= number; i++ ) {
         
         if( isPrime( i ))
            std::cout << i << " ";
    }
    std::cout << std::endl;
}