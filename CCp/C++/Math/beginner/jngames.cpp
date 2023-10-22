
#include <iostream>
using namespace std;

int main() {
   
   int T;
   cin >> T;
 
   for ( int i = 0; i < T; i++ ) {
       int X, Y;
       cin >> X >> Y;
      
     if( ( X + Y ) % 2 == 0 ) {
       cout << "Janmansh\n";
     } else {
      cout << "Jay\n";
     }

   }
}