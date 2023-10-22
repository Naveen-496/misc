#include <iostream>
using namespace std;

int main()
{
  // your code goes here
  int T;
  cin >> T;
  while (T--)
  {
    int N, X;
    cin >> N >> X;
    int sum = 0;
    for (int i = 1; i < N; i++)
    {
      int n;
      cin >> n;
      sum += n;
    }
    int diff = N * X;
    diff = diff - sum;
    if (diff < 0)
    {
      diff = 0;
    }
    cout << diff << endl;
  }
  return 0;
}
