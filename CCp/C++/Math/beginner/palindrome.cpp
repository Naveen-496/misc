

#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int T;
	cin >> T;
	while ( T-- ) {
	    int N;
	    cin >> N;
	    int reverse = 0, n = N, m = 1;
	    while ( n > 0 ) {
	        int rem = n % 10;
	        reverse = ( reverse * 10 ) + rem;
          m *= 10;
	        n = n / 10;
	    }
	    if( reverse == N ) {
	        cout << reverse <<  " wins\n";
	    } else {
	        cout << reverse << " loses\n";
	    }
	    
	}
	return 0;
}
