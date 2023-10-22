#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int T;
    cin >> T;

    while (T--) {
        int N, K, X, Y;
        cin >> N >> K >> X >> Y;

        // If K is greater than N, Chef needs to buy all lamps, so the minimum cost is N * X.
        // Otherwise, Chef can buy K red lamps and (N - K) blue lamps.
        // So, the minimum cost is K * X + (N - K) * Y.
        int minCost = (K <= N) ? min(N * X, K * X + (N - K) * Y) : N * X;

        cout << minCost << endl;
    }

    return 0;
}
