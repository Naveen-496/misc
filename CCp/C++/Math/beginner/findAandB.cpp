#include <iostream>
#include <limits.h>
using namespace std;


int findSecondLargest ( int a, int b, int c ) {

   int min = INT_MAX;
   if( (a > b && a < c ) || ( a < b && a > c) ) {
      min = a;
   } else if( (b > a && b < c  ) || ( b > c && b < a )) {
     min = b;
   } else {
     min = c;
   }

   return c;

}

int main () {
   
    int T;
    cin >> T;
    while ( T-- ) {
       int X, Y, Z;
       cin >> X >> Y >> Z;

      if( ( X * Y ) % Z == 0 ) {
        cout << X * Y << " " << Z << endl;
      } else if( (X * Z) % Y == 0 ) {
          cout << X * Z  << " " << Y << endl;
      } else if ( ( Y * Z ) % X == 0 ) {
           cout << Y * Z  << " " << X << endl;
      } else {
         cout << "-1\n";
      }
    }
    return 0;
}