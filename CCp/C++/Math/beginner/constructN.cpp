
#include <iostream>
using namespace std;

int main() {
    int N;
    cin >> N;

    int x = 0, y = 0;

    while (N >= 0) {
        if (N % 7 == 0) {
            y = N / 7;
            break;
        }
        N -= 2;
        x++;
    }

    if (N == 0) {
        cout << "Possible to represent N as " << x << " '2's and " << y << " '7's." << endl;
    } else {
        cout << "Not possible to represent N using the sum of 2's and 7's." << endl;
    }

    return 0;
}
