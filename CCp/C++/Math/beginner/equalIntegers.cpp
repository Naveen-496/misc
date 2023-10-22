
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int T;
	cin >> T;
	while ( T-- ) {
	    int x, y;
	    cin >> x >> y;
	    
	    int ops = 0;
	    while ( true ) {
	        if ( x == y )
	           break;
	     
	       if( x > y ) {
	           
	           y = y + 2;
	           ops++;
	           
	       }
         if ( x < y) {
	           x = x + 1;
	           ops++;
	       }      
	    }
	    
	    cout << ops << endl;
	}
	return 0;
}
