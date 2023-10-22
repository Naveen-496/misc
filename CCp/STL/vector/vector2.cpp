#include <bits/stdc++.h>
using namespace std;

class MyClass1
{

private:
  int var1;
  string var2;

public:
  int myNum;
  string myString;

public:

  int getVar1() {
     return this -> var1;
  }
  void myMethod()
  {
    cout << "Hello, " << myString << endl;
  }
};

int main()
{
  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
  MyClass1 myObj1;

  myObj1.myNum = 20;
  myObj1.myString = "some text";

  // cout << myObj1.myString << " " << myObj1.myNum <<  endl;

  myObj1.myMethod();
}
