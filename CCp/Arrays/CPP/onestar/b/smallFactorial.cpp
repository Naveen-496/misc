#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main() {

    int T;
    cin >> T;
    while ( T-- ) {

       int N;
       cin >> N;
       int fact = 1;
       for ( int i = N; i >= 1; i-- ) {
           fact *= i;
       }
       cout << fact << endl;

    }
}