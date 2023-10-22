#include <iostream>
using namespace std;


int main () {

   int T;
   cin >> T;
   while ( T-- ) {
     int a, b;
     cin >> a >> b;
     int min = a;
     int max = b;

     if( a > b ) {
       max = a;
       min = b;
     }

     cout << "min " << min << " max " << max << endl;

     while ( min < max ) {
          min *= 2;
     }

     if( min == max ) {
        cout << "Yes\n";
     } else {
      cout << "No\n";
     }
   }
}