
#include <stdio.h>

int main(void)
{

  int distanceFromHisHome;
  printf("%s", "Enter the distance from his home : ");
  scanf("%d", &distanceFromHisHome);

  char message[100];
 // sprintf(message, "Chef walks %d kms from his home", (distanceFromHisHome * 10));

  printf("%s %d %s \n", "chef walks ", (distanceFromHisHome * 10), " kms from his home ");

  return 0;
}