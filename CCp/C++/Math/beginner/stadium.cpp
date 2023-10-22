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

    int count = 0;
    double runs = 0;

    for (int i = 1; i <= N; i++)
    {

      int a;
      cin >> a;

      runs += a;
      if ((runs / i) * 100 == 100)
      {
       //  cout << (runs / i) * 100 << " ";
        count++;
      }
    }


    cout << count << endl;
  }
  return 0;
}
