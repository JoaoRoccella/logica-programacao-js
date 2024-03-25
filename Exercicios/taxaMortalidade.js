// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

// processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade

function calculaNatalidadeMortalidade() {

    let numeroHabitantes;

    do {
        numeroHabitantes = Number(window.prompt('Digite o número de habitantes:'));
        if (isNaN(numeroHabitantes)) {
            window.alert('Você precisa digitar um NÚMERO');
        }

    } while (isNaN(numeroHabitantes));

    let opcao;
    
    do {
        opcao = window.prompt(`
        Digite a opção desejada:
        [N] Taxa de Natalidade
        [M] Taxa de Mortalidade
        `).toUpperCase();

        if (opcao !== 'N' && opcao !== 'M') {
            window.alert('Erro: digite uma opção válida!');
        } else {
            break;
        }
    } while (true);
    
    switch (opcao) {
        case 'N':
            let numeroNascimentos;
            
            do {
                numeroNascimentos = Number(window.prompt('Digite o número de nascimentos:'));

                if (isNaN(numeroNascimentos)) {
                    window.alert('Digite um número válido de nascimentos!')
                } else {
                    break;
                }
            } while (true);

            window.alert(`A taxa de natalidade é ${numeroNascimentos * 1000 / numeroHabitantes}`);
            break;
        case 'M':
            const numeroObitos = Number(window.prompt('Digite o número de óbitos:'));
            window.alert(`A taxa de mortalidade é ${numeroObitos * 1000 / numeroHabitantes}`);
            break;
        default:
            window.alert('A opção escolhida é inválida. Execute o programa novamente.');
    }

}






