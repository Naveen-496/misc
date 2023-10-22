#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
  int T;
  cin >> T;
  while (T--)
  {

    int C, H, K;
    cin >> C >> H >> K;

    int diff = abs(C - H);
    if (diff == 0 ||  K < diff)
    {
      if (diff % K == 0)
      {
        cout << (diff / K) << endl;
      }
      else
      {
        cout << (diff / K) + 1 << endl;
      }
    }
    else
    {
      cout << "1\n";
    }
  }
}