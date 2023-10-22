#include <bits/stdc++.h>
using namespace std;

class PrimeGenerator
{

public:
  bool isPrime(int num);
  void generatePrimes(int m, int n);
};

bool PrimeGenerator::isPrime(int num)
{

  if (num <= 1)
    return false;

  if (num <= 3)
    return true;

  if (num % 2 == 0 || num % 3 == 0)
    return false;

  for (int i = 5; i * i <= num; i += 6)
  {
    if (num % i == 0)
      return false;
  }

  return true;
}

void PrimeGenerator::generatePrimes( int m, int n ) {
   
    for ( int i = m; i <= n; i++ ) {
       if( isPrime( i )) {
        cout << i << endl;
       }
    }
}

int main() {
 
  // your code goes here
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  int T;
  cin >> T;
  while ( T-- ) {

     int m, n;
     cin >> m >> n;
     PrimeGenerator primeGenerator;
     primeGenerator.generatePrimes( m, n );
     cout << endl;

  }
   return 0;
}