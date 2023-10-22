
#include <iostream>
using namespace std;

int shiftOne(int &num)
{
  // shift all digits by one place to the left and add 0 at the end
  // ex: 5 --> 101 || 101 --> 1010 --> 10
  num = num << 1;
  return num;
}

int shiftTwo( int& num ) {

  // shift all digits by 2 places and add 2 0's at the right end
   return num <<= 2;
}

// left shifting of digits will be equal to multiplying the number with 2 to the power the given shift digit

int shiftThree( int& num ) {
  return num <<= 3;
}

int main()
{
  int T;
  cin >> T;
  while (T--)
  {
    int a;
    cin >> a;
    cout << shiftThree(a) << endl;
  }
  return 0;
}