#include <stdio.h>

int main(void)
{

  int noOfTestCases, totalScore, testsCasesPassed;

  printf("Enter the no of test cases ");
  scanf("%d", &noOfTestCases);

  for (int i = 1; i <= noOfTestCases; i++)
  {

    printf("please enter total score and the no of testcases chef has passed ");
    scanf("%d%d", &totalScore, &testsCasesPassed);

    int pointsPerTestCase = totalScore / 10;
    printf("%s %d %s \n", "chef has scored ", (testsCasesPassed * pointsPerTestCase), " points ");
  }
}