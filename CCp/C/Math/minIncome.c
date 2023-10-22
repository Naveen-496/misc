

#include <stdio.h>

int main(void) {
    int numTestCases;
    printf("%s", "Enter the number of test cases : ");
    scanf("%d",  &numTestCases);

    for (int i = 1; i <= numTestCases; i++) {
        int income, minIncome;
        scanf("%d%d", &income, &minIncome);

        if (income > minIncome) {
            printf("%d\n", income - minIncome);
        } else {
            printf("0\n");
        }
    }

    return 0;
}
