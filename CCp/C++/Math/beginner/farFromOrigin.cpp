#include <iostream>
#include <cmath>

int distanceFromChef(int x, int y)
{
  return sqrt(x * x + y * y);
}

int main()
{

  int t;
  std::cin >> t;

  while (t--)
  {
    int X1, Y1, X2, Y2;
    std::cin >> X1 >> Y1 >> X2 >> Y2;

    int distanceOfAlex = distanceFromChef(X1, Y1);
    int distanceOfBob = distanceFromChef(X2, Y2);

    if (distanceOfAlex > distanceOfBob)
    {
      std::cout << "Alex \n";
    }
    else if (distanceOfBob > distanceOfAlex)
    {
      std::cout << "Bob \n";
    }
    else
    {
      std::cout << "Equal \n";
    }
  }
}