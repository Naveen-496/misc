#include <iostream>
using namespace std;

void canWeBreak()
{

  int N;
  cin >> N;

  if (N % 2 == 0)
  {

    cout << "Yes\n";
  }
  else
  {
    cout << "No\n";
  }
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    canWeBreak();
    /* code */
  }
}