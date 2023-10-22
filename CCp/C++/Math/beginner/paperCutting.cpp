#include <iostream>
using namespace std;

int main () {

   int T;
   cin >> T;
   while ( T-- ) {
     
      int N, K;
      cin >> N >> K;
      int minCuts = ( N / K) * ( N / K );
      cout << minCuts << endl;
   }
}