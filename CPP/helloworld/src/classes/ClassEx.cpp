#include <iostream>
using namespace std;

class Player
{

public:
  int x, y;
  int speed;
  string name;

public:
  void move(int xa, int ya)
  {
    x += xa;
    y += ya;
  }
};

int main()
{

  Player player;
  player.name = "John";
  player.speed = 100;
  player.x = player.y = 1;
  cout << player.name << " " << player.speed << " " << player.x << " " << player.y << endl;

  player.move(2, 3);

  cout << player.name << " " << player.speed << " " << player.x << " " << player.y << endl;
}