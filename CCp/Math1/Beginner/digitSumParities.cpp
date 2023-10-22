
#include <iostream>
using namespace std;

class DigitSumParity
{

public:
  DigitSumParity() {}

public:
  int getSumOfDigits(int num)
  {

    int sum = 0;
    while (num > 0)
    {
      sum += num % 10;
      num /= 10;
    }

    return sum;
  }
};

int main()
{

  DigitSumParity dgs;
  int T;
  cin >> T;
  while (T--)
  {

    int N;
    cin >> N;
    int result = dgs.getSumOfDigits(N) % 2;
    while (true)
    {

      N++;
      if (result != dgs.getSumOfDigits(N) % 2)
      {
        cout << N << endl;
        break;
      }
    }
  }
}