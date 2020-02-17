#include<iostream>
using namespace std;

int factorial(int n){
  if (n==0)
    return 1;
  cout<<"Calling:"<<n-1<<endl;
  return n*factorial(n-1);
}

int main(){
  int fact = factorial(4);
  cout<<fact<<endl;
}
