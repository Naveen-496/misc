#include <stdio.h>
#include <math.h>

int main(void) {
	// your code goes here
	int t;
	scanf("%d", &t);
	while( t-- ) {
	    int n, x, a, b;
	    scanf("%d%d", &n, &x);
	    // int income = (floor) (pow( 2, x));
      // while( n > 0 ) {
      //   income = income / 2;
      //   n--;
      // }
      b = x - n;
      a = pow(2, b);
      printf("%s %d \n", "remaining is : ", a);
	}
	return 0;
}
