
#include <iostream>
using namespace std;

int main () {

   int T;
   cin >> T;
   while ( T-- ) {

     int X, Y, Z;
     cin >> X >> Y >> Z;
     int totalBooks =  X * Y;

     if( totalBooks % Z != 0 ) {
      cout << ( totalBooks / Z) + ( totalBooks % Z) << endl;
     } else {
      cout << totalBooks / Z << endl;
     }
   }
   return 0;
}