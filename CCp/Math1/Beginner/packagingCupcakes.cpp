#include <iostream>
using namespace std;

int findBestPackege()
{

  int N;
  cin >> N;
  cout << (N / 2) + 1 << endl;
 
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    cout << findBestPackege() << endl;
  }
}