#include <iostream>
#include <cmath>
#include <bits/stdc++.h>
using namespace std;

#include <iostream>
#include <vector>

class Sieve
{
public:
    int N = 30;
    std::vector<bool> nums;

public:
    // Constructor with parameter to initialize N and nums
    Sieve(int n) : nums(N, true)
    {
        // Constructor body (if needed)
    }

    // Other member functions and code for the class (if needed)

public:
    void sieve()
    {
        nums[0] = nums[1] = false;
        for (int i = 2; i * i <= N; i++)
        {
            if (nums[i])
            {
                for (int j = i * i; j <= N; j += i)
                {
                    nums[j] = false;
                }
            }
        }
    }
};

int main()
{

    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    int N = 10;
    Sieve sieve(N); // Initialize the class with N=30
    sieve.sieve();

    for ( int i = 0; i < sieve.nums.size(); i++ ) {
        cout << i << " " <<  sieve.nums[i] << endl;
    }
    cout << endl;

    // Access the class members if needed
    // std::cout << "N: " << sieve.N << std::endl;
    // std::cout << "nums[0]: " << sieve.nums[0] << std::endl;

    return 0;
}
