#include <iostream>
#include <algorithm>
using namespace std;

int getPoints(int health, int power)
{

  if (health % power)
  {
    return health / power + 1;
  }
  return health / power;
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    int H, X, P;
    cin >> H >> X >> P;

    if (H < P)
    {

      int noPower = getPoints(H, X);
      int power = getPoints(H - P, X) + 1;
      cout << min(power, noPower) << endl;
    }
    else
    {
      cout << "1\n";
    }
  }
}