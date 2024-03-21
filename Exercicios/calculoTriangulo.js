// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console
function verificarTriangulo() {

    const
        lado1 = Number(window.prompt('Valor do lado 1:')),
        lado2 = Number(window.prompt('Valor do lado 2:')),
        lado3 = Number(window.prompt('Valor do lado 3:'));

    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {

        if (lado1 === lado2 && lado2 === lado3) {
            console.log('O triângulo é Equilátero');

            // Teste do Isósceles: (lado1 === lado2 && lado2 !== lado3 || lado2 === lado3 && lado3 !== lado1 || lado1 === lado3 && lado3 !== lado2) 

            // simplificação da lógica ⬇

        } else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
            console.log('O triângulo é Isósceles');
        } else {
            console.log('O triângulo é Escaleno');
        }

    } else {
        console.log('A forma não é um triângulo');
    }

}
