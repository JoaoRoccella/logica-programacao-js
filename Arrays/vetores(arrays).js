// //Arrays são como caixas com outras caixas dentro, que podem ser acessadas através do seu índice entre colchetes []. O primeiro índice sempre começa do 0, portanto um array de 4 posições terá o índice de 0 a 3

// //O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, booleam...

// //Realizando a criação de um array:
// //    indice = 0            1         2     3
// const arr = ["Girafa", "camaleão", 'zebra', 3]
// //  11
// arr[10] = "Leão"

// console.log(`
//     ${arr.length}
// `);

// // arr.push("qualquer coisa");
// // arr.push("Girafa")

// // console.log(arr);

// //******************* Método 01 - Push ********************/
// // permite adicionar valores no final do array!
// const pushArray = ['Leão', 'tartaruga', 'papagaio']
// console.log(pushArray);

// pushArray[1] = 'Borboleta'
// console.log(pushArray);

// pushArray.push('escorpião')
// console.log(pushArray);

// pushArray.push('dragão')
// console.log(pushArray);

// //unshift -> adicona elementos no início do array
// pushArray.unshift('Coelho')
// console.log(pushArray);

// //******************* Método 02 - POP ********************/
// //POP remove o último valor de um determinado array
// const popArray = ["Fernando" , 'Mara', 'Eric', 'Gabriel']
// console.log(popArray);

// //elimina o último valor do array
// popArray.pop()

// //remover o primeiro valor de um array ???
// popArray.shift()

// console.log(popArray);

// //******************* Método 03 - splice *********************/
// //metodo splice permite selecionar um indice e remover e adicionar valores (substituição)
// //      indices   =    0      1      2      3
// const spliceArray = ['jan', 'fev', 'abr', 'jun']
// console.log(spliceArray);

// spliceArray.splice(2, 0, 'mar')
// spliceArray.splice(4, 0, 'maio')

// console.log(spliceArray);

// //******************* Método 04 - filter *********************/

// const filterArray = ["guilherme", "amanda", "Rogerio", "Gabrielll", "Renata"]
// console.log(filterArray);

// const novoArray = filterArray.filter((qualquerCoisa) => {

//     return qualquerCoisa == "amada" || qualquerCoisa == "guilherme"
// })

// console.log(novoArray);

// //******************* Método 05 - Map *********************/
// // Map não modifica o array original, somente a função de callback poderá fazer isso! Ou seja, ela criará um novo array modificado
// //      indice =  0  1  2  3  4
// const arrayMap = [1, 2, 3, 4, 5]

// const arrayModificado = arrayMap.map((multiplicador) => {
//     return multiplicador * multiplicador
// })

// console.log(arrayMap);
// console.log(arrayModificado);

// //******************* Método 06 - ForEach *********************/

// const foreachArray = ['Carlos', 'andre', 'julia', 'akira']
// console.log(foreachArray);

// foreachArray.forEach( (nome) => {

//     console.log(nome);
//  } )

//******************* Exercício 01 *********************/
//CRIE 2 ARRAYS COM NOME E SOBRENOME - OK
const nome = ["Guilherme", "Julia", "Romero", "Drielly", "Charles"];
const sobrenome = ["Amorim", "Billalta", "Brito", "Santos", "Chavier"];

//Crie um terceiro array de nomes completo
const nomeCompleto = nome.map((nome, indice) => {
  return `${nome} ${sobrenome[indice]}`;
});

nomeCompleto.forEach((qualquerParametro) => {
  console.log(qualquerParametro);
});
