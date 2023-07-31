#include<iostream>

using namespace std;


void intercambio(int *x,int *y){
	int z = *x;
	*x = *y;
	*y = z;
}

int main(){
	int a = 20, b = 30;
	intercambio(&a, &b);
	cout << "a es: " <<a<<" Y b es: " << b << endl;
	cout << "La direccion de a es: " <<&a<< " y " << " La direccion de b es: " <<&b<<endl;
	
	
	return 0;
}