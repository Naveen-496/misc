#include <iostream>
using namespace std;

void pleaseSolve()
{
  int N;
  cin >> N;

  int start38 = 0, lime108 = 0;
  for (int i = 1; i <= N; i++)
  {

    string s;
    cin >> s;
    if (s == "START38")
    {
      start38++;
    }
    else
    {
      lime108++;
    }
  }
  cout << start38 << " " << lime108 << endl;
}

int main()
{
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
  int T;
  cin >> T;
  while (T--)
  {
    pleaseSolve();
  }
}