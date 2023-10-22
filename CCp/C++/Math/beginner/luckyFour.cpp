#include <iostream>
using namespace std;

int main () {
   int T;
   cin >> T;
   while ( T-- ) {
     
      int c, count = 0;
      cin >> c;

      for ( int i = c; i > 0; ) {
         if( i % 10 == 4  ) {
          count += 1;
         }
         i = i / 10;
      }
     cout << "4's count : " << count << endl;
   }
}
