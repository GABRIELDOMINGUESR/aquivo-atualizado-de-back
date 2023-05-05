/******************************************************************************************
 * Objetivo: Sistema para gerenciar numeros impares ou pares
 * Data: 24/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

var imparOuParModel = require('./modulo/numerosImparesOuPares')

var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(
    '\n-----------------------------Digite onde o conjunto começa [0 até 500]:-----------------------------\n Digite aqui:',
    function(inicialValor) {
        let valorInicial = Number(inicialValor)
        if (valorInicial === '') {
            console.log('Erro: não é possível localizar os números impares e pares sem a entrada de dados.')
            entradaDados.close()
        } else if (isNaN(valorInicial)) {
            console.log('Erro: não é possível localizar os números impares e pares sem a entrada de valores númericos')
            entradaDados.close()
        } else if (valorInicial < 0 || valorInicial > 500) {
            console.log('Erro: por favor digite valores entre 0 ao 500')
            entradaDados.close()
        } else {
            entradaDados.question(
                '\n-----------------------------Digite onde o conjunto acaba [100 até 1000]:-----------------------------\n Digite aqui:',
                function(valorFinal) {
                    let valorFim = Number(valorFinal)
                    if (valorFim === '') {
                        console.log('Erro: Não é possível localizar os números impares e pares sem a entrada de dados.')
                        entradaDados.close()
                    } else if (isNaN(valorFim)) {
                        console.log('Erro: Não é possível localizar os números impares e pares sem a entrada de valores númericos')
                        entradaDados.close()
                    } else if (valorFim < 100 || valorFim > 1000) {
                        console.log('Erro: Por favor digite números entre 100 ao 1000')
                        entradaDados.close()
                    } else if (valorFim < valorInicial) {
                        console.log('Erro: O número inicial não pode ser maior que o número final')
                        entradaDados.close()
                    } else {
                        entradaDados.question(
                            '\n-----------------------------Qual o conjunto de números você quer utilizar?-----------------------------\n[IMPARES], [PARES] ou [AMBOS]: ',
                            function(questaoEscolha) {
                                let escolha = questaoEscolha.toUpperCase()
                                if (escolha == '') {
                                    console.log('ERRO: Precisa escolher o tipo de número')
                                    entradaDados.close()
                                } else if (escolha != 'IMPARES' && escolha != 'PARES' && escolha != 'AMBOS') {
                                    console.log('ERRO: escolha inválida, digite somente [IMPAR], [PAR] ou [AMBOS]')
                                    entradaDados.close()
                                } else {
                                    imparOuParModel.numerosImparesOuPares(valorInicial, valorFim, escolha)
                                    entradaDados.close()
                                }
                            })
                    }
                })
        }
    })