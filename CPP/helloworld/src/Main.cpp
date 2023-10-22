
#include <iostream>
using namespace std;

int pointer()
{
	 int var = 10;
	int* ptr = &var;
	 *ptr = *ptr / 2;
	cout << var << endl;
	return 0;
};

int main()
{

	std::cout << "Hello World" << std::endl;
	pointer();
	std::cin.get();
	return 0;
}