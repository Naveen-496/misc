#include <stdio.h>

int main(void)
{
  // your code goes here
  int t;
  scanf("%d", &t);
  while (t--)
  {
    int n, m;
    scanf("%d%d", &n, &m);
    n = n - (n / 10.0);
    printf("%d \n", n);
    if (n < m)
    {
      printf("%s \n", "ONLINE");
    }
    else if (m < n)
    {
      printf("%s \n", "DINING");
    }
    else
    {
      printf("%s \n", "EITHER");
    }
  }
  return 0;
}
