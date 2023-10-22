#include <iostream>
using namespace std;

/*
  The right shift operator (>>) in C++ is a bitwise operator that shifts the bits of a number to the right by a specified number of positions. It effectively divides the number by 2 raised to the power of the specified shift count.
*/

int shiftOne(int &num)
{
  // num / 2^1
  return num >>= 1;
}

int shiftTwo(int &num)
{
  // num / 2^2;
  return num >>= 2;
}

int shiftThree(int &num)
{
  // num / 2^3
  return num >> 3;
}

int main()
{
  int T;
  cin >> T;
  while (T--)
  {
    int a;
    cin >> a;
    cout << shiftThree(a) << endl;
  }
}