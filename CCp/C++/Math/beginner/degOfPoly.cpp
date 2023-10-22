#include <iostream>
using namespace std;

int main()
{
  // your code goes here
  int T;
  cin >> T;
  while (T--)
  {
    int N;
    cin >> N;
    int c = N;
    int p = 0;
    int count = 0;
    while (N--)
    {
      int n;
      cin >> n;
      if (n != 0)
      {
        p = count;
      }
      count++;
    }
    cout << p << "\n";
  }
  return 0;
}
