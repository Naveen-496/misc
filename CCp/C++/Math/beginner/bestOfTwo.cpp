#include <iostream>
#include <algorithm>
using namespace std;

int findMin(int a, int b, int c)
{

  if (a < b && a < c)
  {
    return a;
  }
  else if (b < c)
  {
    return b;
  }
  else
  {
    return c;
  }
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {

    int A1, A2, A3, B1, B2, B3;
    cin >> A1 >> A2 >> A3 >> B1 >> B2 >> B3;
    int aMin = findMin(A1, A2, A3);
    int bMin = findMin(B1, B2, B3);
    int aBestTwo = A1 + A2 + A3 - aMin;
    int bBestTwo = B1 + B2 + B3 - bMin;

    if (aBestTwo > bBestTwo)
    {
      cout << "Alex\n";
    }
    else if (bBestTwo > aBestTwo)
    {
      cout << "Bob\n";
    }
    else
    {
      cout << "Tie\n";
    }
  }
}