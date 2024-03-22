// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno.
// Sendo    que:
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.

//entrada de dados
// = informar as 3 medidas de um triangulo
const ladoA = 30;
const ladoB = 20;
const ladoC = 90;

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || !
if (ladoA == ladoB && ladoB == ladoC) {
  //saida de dados
  // = informar se o triangulo é equilátero, escaleno ou isócele
  // = motrar a saída do programa na console
  console.log("O triângulo é Equilátero pois tem as 3 medidas iguais!");
} else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
  //saida de dados
  // = informar se o triangulo é equilátero, escaleno ou isócele
  // = motrar a saída do programa na console
  console.log("O triângulo é Isóscele pois tem pelo menos 2 lados iguais!");
} else {
  //saida de dados
  // = informar se o triangulo é equilátero, escaleno ou isócele
  // = motrar a saída do programa na console
  console.log("O triângulo é Escaleno pois possui todos os lados diferentes!");
}
