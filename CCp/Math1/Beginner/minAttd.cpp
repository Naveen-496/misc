#include <iostream>
using namespace std;

void solve() {
    
    int N;
    cin >> N;
    string bits;
    cin >> bits;
    int present = 0;
    int n = bits.length();
    for ( int i = 0; i < n; i++ ) {
        if( bits[i] == '1'){
            present++;
        }
    }
    
    if( present + ( 120 - N ) >= 90 ) {
        cout << "YES\n";
    }
    else {
        cout << "NO\n";
    }
    
}

int main() {
	// your code goes here
	int T;
	cin >> T;
	while ( T-- ) {
	  solve();    
	}
	return 0;
}
