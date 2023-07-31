#include<iostream>

using namespace std;

//Defino la funcion intercambio

void intercambio(int *x, int *y){
	int z= *x; //z contenido de la direccion de x
	*x = *y; //contenido de x = contenido de y
	*y = z; //contenido de y = z
}

int main(){
	 int a=20, b= 30;
	 intercambio(&a, &b); // a y b son pasados por referncia
	 cout<<" a es: "<<a<<" y "<<" b es: "<<b<<endl;
	 cout<<" La direción de a es: "<<&a<<" y "<<" La direción de b es: "<<&b<<endl;
	 
	return 0;
}