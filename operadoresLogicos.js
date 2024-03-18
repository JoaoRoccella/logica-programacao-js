//exemplo de cadastro de sistemas 

const email = 'guilherme'
const senha = 123456

//         F                       V
if (email == 'Guilherme' || senha == 123456) {
    console.log("login aprovado");
} else {
    console.log("login reprovado");
}



//exemplo final

const identidade = true
const bemTrajado = true
const vip = false

if (identidade && bemTrajado || vip) {
    console.log("sua entrada vai ser no camarote A");
} else{
    console.log("sua entrada será apenas na pista");
}