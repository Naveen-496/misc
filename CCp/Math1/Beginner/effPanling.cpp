#include <iostream>
using namespace std;

int getRemainder(string num)
{
  int n = num.length();
  if (n >= 2)
  {
    int lastTwo = (num[n - 2] - '0') * 10 + (num[n - 1] - '0');
    return lastTwo % 20;
  }
  else
  {
    return (num[0] - '0') % 20;
  }
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {

    string N;
    cin >> N;

    int minProcessed = getRemainder(N);
    cout << minProcessed << endl;
  }
}