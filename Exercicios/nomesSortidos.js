// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

function buscarNome() {

    let nomes = [];
    
    for (let i = 0; i < 10; i++) {
        
        nomes[i] = window.prompt('Digite um nome');
        // nomes.push(window.prompt('Digite um nome'))
    
    }

    const nomeBuscado = window.prompt('Digite o nome que deseja buscar');

    // if (nomes.includes(nomeBuscado))
    if (nomes.indexOf(nomeBuscado) >= 0) {

        window.alert('ACHEI');

    } else {
        
        window.alert('NÃO ACHEI');
        // nomes.indexOf(nomeBuscado) retorna -1 se for falso
    }

}



