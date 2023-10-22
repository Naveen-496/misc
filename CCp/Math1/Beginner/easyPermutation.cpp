
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int T;
	cin >> T;
	while ( T-- ) {
	    int N;
	    cin >> N;
	    
	    while ( N > 0 ) {
	        cout << N << " ";
	        N--;
	    }
	    cout << endl;
	}
	return 0;
}

/*

To construct a permutation A of N integers that minimizes the value of the expression:

(1 + A1, 2 + A2, ..., N + AN) LCM(1 + A1, 2 + A2, ..., N + AN)

We need to understand the factors that influence this value. The LCM of a set of numbers will be minimized when those numbers are as close to each other as possible, ideally forming a consecutive sequence.

For a given N, we can construct the permutation A as follows:

A1 = N
A2 = N - 1
A3 = N - 2
...
AN = 1

This permutation ensures that the values (1 + A1, 2 + A2, ..., N + AN) form a consecutive sequence from N+1 to 2N.

Let's verify this for a small example with N = 3:

N = 3
A = {3, 2, 1}

Expression values:
(1 + A1) = 4
(2 + A2) = 4
(3 + A3) = 4

LCM(4, 4, 4) = 4

Now, let's compare it with another permutation like A = {2, 1, 3}:

Expression values:
(1 + A1) = 3
(2 + A2) = 3
(3 + A3) = 6

LCM(3, 3, 6) = 6

As you can see, the first permutation {3, 2, 1} results in a smaller LCM value compared to the second permutation {2, 1, 3}.

Therefore, the permutation A = {N, N-1, N-2, ..., 1} will minimize the given expression for any given N.

*/
