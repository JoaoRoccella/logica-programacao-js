// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol
const placar = '3x2';
const [golsTime1, golsTime2] = placar.split('x');

console.log(`COR - ${golsTime1} x ${golsTime2} - PAL`);

// não tem a ver com o futebol, é só outro exemplo
const [nome, sobrenome] =  'João Roccella'.split(' ');

console.log(`Nome: ${nome} - Sobrenome: ${sobrenome}`);
