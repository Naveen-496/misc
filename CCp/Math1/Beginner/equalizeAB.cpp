#include <iostream>
#include <limits.h>
#include <cmath>
#include <algorithm>
using namespace std;

class Equalize
{

 public:
  int num1;
  int num2;
  int x;

public:
  bool canEqualize()
  {

    while (num1 < num2)
    {
      num1 = num1 + x;
      num2 = num2 - x;
    }
    return num1 == num2;
  }
};

int main () {

  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
   
     int T;
     cin >> T;
     while ( T-- ) {
       Equalize equalize;
        int a, b, x;
        cin >> a >> b >> x;
         equalize.num1 = a;
         equalize.num2 = b;
          equalize.x = x;

          bool equal = equalize.canEqualize();
          if( equal ) {
            cout << "Yes\n";
          } else {
            cout << "No\n";
          }
     }
}