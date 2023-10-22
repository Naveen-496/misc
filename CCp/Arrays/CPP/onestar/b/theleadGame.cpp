#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
  // your code goes here
  int N;
  cin >> N;
  int a = 0, b = 0;
  int lead = -1;
  int winner = 0;

  for (int i = 1; i <= N; i++)
  {

    int p1, p2;
    cin >> p1 >> p2;
    a += p1;
    b += p2;
    if (a > b)
    {
      int curr_lead = a - b;
      if (curr_lead > lead)
      {
        lead = curr_lead;
        winner = 1;
      }
    }
    else
    {
      int curr_lead = b - a;
      if (curr_lead > lead)
      {
        lead = curr_lead;
        winner = 2;
      }
    }
  }

  cout << winner << " " << lead << endl;

  return 0;
}
