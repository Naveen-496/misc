#include <iostream>
using namespace std;

int countOddPairs(int n)
{
  int count = 0;

  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= n; j++)
    {
      int sum = i + j;
      if (sum % 2 == 1)
      {
        cout << " i : " << i << " j : " << j << endl; 
        count++;
      }
    }
  }

  return count;
}

int countOddsEff( int n ) {
   
    return ( n * n ) / 2;

}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    int N;
    cin >> N;
    int odds = countOddsEff( N );
    cout << odds << endl;
  }
}