#include<iostream>
using namespace std;

struct Node{
  int data;
  Node* next;
};

struct Node* head;

int Insert(int x){
  struct Node* temp = new Node();
  temp -> data = x;
  temp -> next = head;
  if(temp != NULL)
  head = temp;
}

void Print(){
  struct Node*  temp = head;
  while (temp != NULL){
    printf("The data is %d",temp->data);
    temp = temp -> next;
  }
}
int main(){
  head = NULL;
  int n,x;
  printf("How many numbers");
  scanf("%d",&n);
  for(int i=0; i<=n; i++){
    printf("Enter the number:");
    scanf("%d",&x);
    Insert(x);
    Print();
    printf("\n");
  }
  printf("\n");
  
}
