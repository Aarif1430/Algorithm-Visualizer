#include<iostream>
using namespace std;

int fabonicci(int n){
  int a = 1;
  int b = 1;
  int c = 0;
  
  cout<<c<<endl<<a<<endl<<b<<endl;

  for (int i=0; i<n; i++){
    c = a + b;
    a = b;
    b = c;
    cout<<c<<endl;
  }
}
int fabonicci_rec(int n){
  if (n<=1){
    return n;
   }

  return (fabonicci_rec(n-1)+fabonicci_rec(n-2));
}

int main(){
  int f = fabonicci_rec(6);
  fabonicci(5);
  printf("The sequence is %d",f);
  cout<<endl;
}
