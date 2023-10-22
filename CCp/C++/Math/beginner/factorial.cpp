#include <iostream>
using namespace std;

int main () {
   int T;
   cin >> T;

   for ( int i = 0; i < T; i++ ) {
      int N;
      cin >> N;

       int ans = 1;
       for ( int i = 1; i <= N; i++ ) {
            ans *= i;
       }

       cout << ans << endl;
   }
}