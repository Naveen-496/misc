
#include <iostream>
using namespace std;

int main()
{

  int T;
  cin >> T;
  for (int i = 0; i < T; ++i)
  {
    int A, B, C;
    cin >> A >> B >> C;
    int totalAngle = A + B + C;
    if (totalAngle == 180)
    {
      cout << "YES \n";
    }
    else
    {
      cout << "NO \n";
    }
  }
}