/******************************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 23/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

var tabuadaModel = require ('./modulo/calculadoraTabuada');

var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(
    'Qual o número da tabuada que você quer começar? [2 ao 100]: ',
    function(multiplicandoInicial) {
        let multiplicandoInicio = Number(multiplicandoInicial)
        if (multiplicandoInicio == '') {
            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
            entradaDados.close()
        } else if (isNaN(multiplicandoInicio)) {
            console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
            entradaDados.close()
        } else if (multiplicandoInicio < 2 || multiplicandoInicio > 100) {
            console.log('ERRO: por favor digite valores entre 2 ao 100')
            entradaDados.close()
        } else {
            entradaDados.question(
                'Qual o número da tabuada que você quer finalizar? [2 ao 100]: ',
                function(multiplicandoFinal) {
                    let multiplicandoFim = Number(multiplicandoFinal)
                    if (multiplicandoFim == '') {
                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                        entradaDados.close()
                    } else if (isNaN(multiplicandoFim)) {
                        console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                        entradaDados.close()
                    } else if (multiplicandoFim < 2 || multiplicandoFim > 100) {
                        console.log('ERRO: por favor digite valores entre 2 ao 100')
                        entradaDados.close()
                    } else {
                        entradaDados.question(
                            'Qual o número minímo do multiplicador? [1 ao 50]: ',
                            function(multiplicadorInicial) {
                                let multiplicadorInicio = Number(multiplicadorInicial)

                                if (multiplicadorInicio == '') {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                    entradaDados.close()
                                } else if (isNaN(multiplicadorInicio)) {
                                    console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                    entradaDados.close()
                                } else if (multiplicadorInicio < 1 || multiplicadorInicio > 50) {
                                    console.log('ERRO: por favor digite valores entre 1 ao 50')
                                    entradaDados.close()
                                } else {
                                    entradaDados.question(
                                        'Qual o número máximo do multiplicador? [1 ao 50]: ',
                                        function(multiplicadorFinal) {
                                            let multiplicadorFim = Number(multiplicadorFinal)

                                            if (multiplicadorFim == '') {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores')
                                                entradaDados.close()
                                            } else if (isNaN(multiplicadorFim)) {
                                                console.log('ERRO: não é possível continuar o cálculo sem a entrada de valores númericos')
                                                entradaDados.close()
                                            } else if (multiplicadorFim < 1 || multiplicadorFim > 50) {
                                                console.log('ERRO: por favor digite valores entre 1 ao 50')
                                                entradaDados.close()
                                            } else {
                                                tabuadaModel.calculadoraTabuada(multiplicandoInicio, multiplicandoFim, multiplicadorInicio, multiplicadorFim)
                                                entradaDados.close()
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    })