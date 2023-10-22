#include <iostream>
#include <algorithm>
using namespace std;

int main () {
   
   int T;
   cin >> T;
   while ( T-- ) {
     int N, K;
     cin >> N >> K;
      int count = 0;
      int i;
      while ( N-- ) {
         cin >> i;
         if ( (i + K) % 7 == 0 ) {
              count += 1;
         }
      }
      cout << count << endl;
   }
}