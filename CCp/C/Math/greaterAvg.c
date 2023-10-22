
#include <stdio.h>

int main(void) {
	// your code goes here
	int t;
	scanf("%d", &t);
	
	while( t-- ) {
	    int a, b, c;
	    scanf("%d%d%d", &a, &b, &c);
	    float avg = ( a + b ) / 2.0;
	    if( avg > c ) {
        printf("%f", avg);
	        printf("%s \n", "YES");
	    } else {
        printf("%f", avg);
	        printf("%s \n", "NO");
	    }
	}
	return 0;
}

