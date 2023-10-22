#include <stdio.h>

int main(void) {
	// your code goes here
	int noOfTestCases,allUsers, aUsers, bUsers;
	
	scanf("%d", &noOfTestCases);
	
	for( int i = 1; i <= noOfTestCases; i++ ) {
	    scanf("%d%d%d",&allUsers, &aUsers, &bUsers);
	    printf("%d%s%d \n", ( allUsers - aUsers), " ", ( allUsers - aUsers - bUsers));
	}
	return 0;
}
