#include <iostream>
using namespace std;

int main()
{
  int T;
  cin >> T;

  for (int i = 0; i < T; i++)
  {
    int N;
    int max = 0;
    cin >> N;

    for (int j = 1; j <= N; j++)
    {
      int C;
      cin >> C;
      if (C > max)
      {
        max = C;
      }
    }
    cout << " max : " << max << endl;
  }
}