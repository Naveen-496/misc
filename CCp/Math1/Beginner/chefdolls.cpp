#include <iostream>
using namespace std;

int oddPairBrute()
{

  int N;
  cin >> N;
  int arr[N];
  for (int i = 0; i < N; i++)
  {
    cin >> arr[i];
  }

  for (int i = 0; i < N; i++)
  {
    for (int j = i + 1; j < N; j++)
    {
      if (arr[i] == arr[j])
      {
        arr[i] = arr[j] = -1;
      }
    }
  }

  for (int k = 0; k < N; k++)
  {
    if (arr[k] != -1)
    {
      return arr[k];
    }
  }

  return 0;
}

int oddPairXor()
{

  int N;
  cin >> N;

  int arr[N];
  int ans = 0;
  int n;
  for (int i = 0; i < N; i++)
  {
    cin >> n;
    ans ^= n;
  }

  //  for ( int i = 0; i < N; i++ ) {
  //    ans ^= arr[i];
  //  }

  return ans;
}

int main()
{

  int T;
  cin >> T;
  while (T--)
  {
    // cout << oddPairBrute() << endl;
    cout << oddPairXor() << endl;
  }
}
