#include <iostream>
using namespace std;

int andOperator(int &num)
{
  return num & 2;
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    int a;
    cin >> a;
    cout << andOperator(a) << endl;
  }
}