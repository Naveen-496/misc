#include <iostream>
using namespace std;

int main () {

   int T;
   cin >> T;

   for ( int i = 0; i < T; i++ ) {

     int N;
     cin >> N;

     int last = N % 10;
     int first = N / 10;
     if( last >= 5 ) {
       first += 1;
     }
     cout << 100 - ( first * 10 ) << endl;
   }
}