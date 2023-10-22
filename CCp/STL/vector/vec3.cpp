// example: class constructor
#include <iostream>
#include <vector>
using namespace std;

class Rectangle
{
  int width, height;

public:
  Rectangle(int, int);
  int area() { return (width * height); }
};

Rectangle::Rectangle(int a, int b)
{
  width = a;
  height = b;
}

int main()
{

  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);
  Rectangle rect(3, 4);
  Rectangle rectb(5, 6);
  Rectangle rectc(5, 8);
  Rectangle rectd(2, 9);
  Rectangle recte(4, 1);
  Rectangle rectf(7, 7);
  Rectangle rectg(6, 1);

  vector<Rectangle> rects = {rect, rectb, rectc, rectd, recte, rectf, rectg};

  for (auto it = rects.begin(); it != rects.end(); it++)
  {
    if ( it -> area() > 30)
    {
      cout << "rect area: " << it -> area() << endl;
      cout << "rectb area: " << it -> area() << endl;
    }
  }

  return 0;
}