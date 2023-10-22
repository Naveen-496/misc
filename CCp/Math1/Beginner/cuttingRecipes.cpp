
#include <iostream>
using namespace std;

int findGcd(int a, int b)
{

  if (b == 0)
  {
    return a;
  }
  return findGcd(b, a % b);
}

void findMin()
{

  int N;
  cin >> N;

  int arr[N];
  for (int i = 0; i < N; i++)
  {
    cin >> arr[i];
  }
  int gcd = arr[0];

  for (int i = 1; i < N; i++)
  {
    gcd = findGcd(gcd, arr[i]);
  }

  for (int i = 0; i < N; i++)
  {
    cout << arr[i] / gcd << " ";
  }
  cout << endl;
}

int main()
{

  int T;
  cin >> T;

  while (T--)
  {
    findMin();
  }
  return 0;
}