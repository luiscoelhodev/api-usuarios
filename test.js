void main(){
	imprimir(0);
}

void imprimir(int num){
  if (num <= 10) {
	  print(++num + ", ");
	  imprimir(num);
  }
}