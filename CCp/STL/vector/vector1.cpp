#include <bits/stdc++.h>
using namespace std;

int main () {

   freopen("input.txt", "r", stdin);
   freopen("output.txt", "w", stdout);

   int N;
   cin >> N;

   vector<int> v1;
   vector<char> v2;
   vector<string> v3;

   for (int i = 0; i < N; i++ ) {
    v1.push_back( i + 1 );
   }

  
   for ( int i = 10; i >= 6; i-- ) {
    v1.insert( v1.begin(), i);
   }

    cout << " the elements in the vector are : ";
   for ( auto it = v1.begin(); it != v1.end(); it++ ) {
      cout << *it << " " ;
   }

   for ( int i = v1.size() - 1; i >= 5; i-- ) {
      v1.pop_back();
   }

  

   cout << endl;

     cout << " the elements in the vector are : ";
   for ( auto it = v1.begin(); it != v1.end(); it++ ) {
      cout << *it << " " ;
   }
 
}

