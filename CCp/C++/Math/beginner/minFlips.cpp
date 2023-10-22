#include <iostream>
#include <algorithm>
using namespace std;

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    int N;
    cin >> N;

    int sum = 0;
    while (N--)
    {
      int C;
      cin >> C;
      sum += C;
    }
    if (sum % 2 == 0)
    {
      cout << sum / 2 << "\n";
    }
    else
    {
      cout << "-1\n";
    }
  }
}