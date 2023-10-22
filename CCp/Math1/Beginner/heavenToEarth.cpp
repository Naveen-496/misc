#include <iostream>
#include <limits.h>
#include <cmath>
#include <algorithm>
using namespace std;

class TimeCalculater
{

  int distance;
  int stairsVelocity;
  int elevatorVelocity;

public:
  TimeCalculater(int N, int v1, int v2)
  {
    distance = N;
    stairsVelocity = v1;
    elevatorVelocity = v2;
  }

public:
  string getMinTime()
  {
    //  using std::min;  // Add the using directive for std::min
   // double minTime = INT_MAX;
    double stairsTime = ((distance * sqrt(2)) / stairsVelocity);
    double elevatorTime = ((distance * 2.0) / elevatorVelocity);

    if (stairsTime < elevatorTime)
    { 
      // cout << " stairs " <<  stairsTime << endl; 
      return "Stairs";
    }
   // cout << " elevartor " <<  elevatorTime << endl;
    return "Elevator";
  }
};

int main()
{

  freopen("input.txt", "r", stdin);
  freopen("output.txt", "w", stdout);

  int T;
  cin >> T;
  while (T--)
  {

    int N, v1, v2;
    cin >> N >> v1 >> v2;
    TimeCalculater timeCalculter(N, v1, v2);
    cout << timeCalculter.getMinTime() << endl;

    // cout << (( N * sqrt( 2 )) / v1) << "  " << (( N * 2.0 ) / v2) << endl;
  }
  return 0;
}