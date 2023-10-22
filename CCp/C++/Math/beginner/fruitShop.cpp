/*
  Chef has closed his restaurant and decided to run a fruit stand instead. His signature dish is a fruit chaat consisting of 2 bananas and 1 apple. He currently has X bananas and Y apples. How many chaats can he make with the fruits he currently has?
*/


#include <iostream>
using namespace std;

int main()
{
  int T;
  cin >> T;
  while (T--)
  {
    int b, a;
    cin >> b >> a;
    int chats = b / 2;
    if (a < chats)
    {
      cout << a << endl;
    }
    else
    {
      cout << chats << endl;
    }
  }
  return 0;
}
