// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para recuperação. Não é necessário ler as notas, você pode defini-las com variáveis.
// Você precisará utilizar uma estrutura de decisão composta, como a seguir:

//correção
//declaração - identificador - tipo (valor)
const nomeAluno = "Ricardo";

//entrada de dados
const nota01 = 3;
const nota02 = 4;
const nota03 = 10;

//processamento de dados - conta
const mediaFinal = (nota01 + nota02 + nota03) / 3;
    
if (mediaFinal >= 7) {
  //saída de dados
  console.log(
    `O aluno: ${nomeAluno}. Foi aprovado com média final de: ${mediaFinal.toFixed(2)}`
  );
} else if (mediaFinal >= 5 && mediaFinal <= 6) {
  //saída de dados
  console.log(
    `O aluno: ${nomeAluno}. Esta de recuperação com média final de: ${mediaFinal.toFixed(2)}`
  );
} else {
  //saída de dados
  console.log(`Aluno reprovado`);
}
