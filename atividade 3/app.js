var imparParModel = require('./modulo/imparPar')

var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('*********************SISTEMA DE IMPARES E PARES*********************')
console.log('O sistema gera um conjunto de números impares, pares ou ambos, conforme solicitado')


entradaDados.question(
    'Digite o valor inicial [0 até 500]: ',
    function(valor1) {
        let valorInicial = Number(valor1)
        if (valorInicial === '') {
            console.log('ERRO: não é possível localizar os impares e pares sem a entrada de dados.')
            entradaDados.close()
        } else if (isNaN(valorInicial)) {
            console.log('ERRO: não é possível localizar os impares e pares sem a entrada de valores númericos')
            entradaDados.close()
        } else if (valorInicial < 0 || valorInicial > 500) {
            console.log('ERRO: por favor digite valores entre 0 ao 500')
            entradaDados.close()
        } else {
            entradaDados.question(
                'Digite o valor final [100 até 1000]: ',
                function(valor2) {
                    let valorFinal = Number(valor2)
                    if (valorFinal === '') {
                        console.log('ERRO: não é possível localizar os impares e pares sem a entrada de dados.')
                        entradaDados.close()
                    } else if (isNaN(valorFinal)) {
                        console.log('ERRO: não é possível localizar os impares e pares sem a entrada de valores númericos')
                        entradaDados.close()
                    } else if (valorFinal < 100 || valorFinal > 1000) {
                        console.log('ERRO: por favor digite valores entre 100 ao 1000')
                        entradaDados.close()
                    } else if (valorFinal < valorInicial) {
                        console.log('ERRO: o valor inicial não pode ser maior que o final')
                        entradaDados.close()
                    } else {
                        entradaDados.question(
                            'Qual conjunto você deseja? \n[IMPAR] [PAR] [AMBOS]: ',
                            function(questaoEscolha) {
                                let escolhaDoUsuario = questaoEscolha.toUpperCase()
                                if (escolhaDoUsuario == '') {
                                    console.log('ERRO: não é possível localizar os impares e pares a escolha.')
                                    entradaDados.close()
                                } else if (escolhaDoUsuario != 'IMPAR' && escolhaDoUsuario != 'PAR' && escolhaDoUsuario != 'AMBOS') {
                                    console.log('ERRO: escolha inválida, digite apenas [IMPAR] [PAR] [AMBOS]')
                                    entradaDados.close()
                                } else {
                                    imparParModel.imparPar(valorInicial, valorFinal, escolhaDoUsuario)
                                    entradaDados.close()
                                }
                            })
                    }
                })
        }
    })