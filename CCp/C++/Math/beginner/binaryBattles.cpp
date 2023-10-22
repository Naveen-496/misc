#include <iostream>
#include <algorithm>
using namespace std;

int main()
{

  int T;
  cin >> T;
  while (T--)
  {

    int N, A, B;
    cin >> N >> A >> B;
    int count = 0;
    while (N > 2)
    {
      count += 1;
      N = N / 2;
    }
    int total = count * (A + B) + A;
    cout << total << "\n";
  }
}