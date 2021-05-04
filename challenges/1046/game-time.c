#include <stdio.h>

int main(){
  int hStart, hEnd;
  
  scanf("%d %d", &hStart, &hEnd);
  if (hStart > hEnd){
    printf("O JOGO DUROU %d HORA(S)\n", 24 - (hStart - hEnd));
  } else if(hStart > hEnd){
    printf("O JOGO DUROU %d HORA(S)\n", hEnd - hStart);
  } else{
    printf("O JOGO DUROU 24 HORA(S)\n");
  }

  return 0;
  
}
