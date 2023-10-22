#include <iostream>
#include <algorithm>
using namespace std;

int main () {

   int T;
   cin >> T;
   while ( T-- ) {
     
      int A, B, C;
      cin >> A >> B >> C;
      int min = 0;
      if( A < B && A < C ) {
        min = A;
      } else if ( B < C ) {
        min = B;
      } else {
        min = C;
      }

      cout << ( A + B + C - min) << "\n";
   }
}