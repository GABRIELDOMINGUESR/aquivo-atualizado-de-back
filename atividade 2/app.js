var tabuadaModel = require('./modulo/calculo')

var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\n*****************SISTEMA DE TABUADA*********************\n');


// Entradas de dados par multipicando
entradaDados.question('\nDigite um número de inicio entre [2 ao 100]: ', function(minimoMultiplicando) {
    let miniMultiplicando = Number(minimoMultiplicando)
    if (miniMultiplicando == '') {
        console.log('\nERRO: Por favor digite algo nas entradas')
        entradaDados.close()
    } else if (isNaN(miniMultiplicando)) {
        console.log('\nERRO: Por favor digite um número')
        entradaDados.close()
    } else if (miniMultiplicando < 2 || miniMultiplicando > 100) {
        console.log('\nERRO: Por favor digite um número entre 2 e 100')
        entradaDados.close()
    } else {

        entradaDados.question('\nDigite um número de fim entre [2 ao 100]: ',
            function(maximoMultiplicando) {
                let maxMultiplicando = Number(maximoMultiplicando)
                if (maxMultiplicando == '') {
                    console.log('\nERRO: Por favor digite algo nas entradas')
                    entradaDados.close()
                } else if (isNaN(maxMultiplicando)) {
                    console.log('\nERRO: Por favor digite um número')
                    entradaDados.close()
                } else if (maxMultiplicando < 2 || maxMultiplicando > 100) {
                    console.log('\nERRO: Por favor digite um número entre 2 e 100')
                    entradaDados.close()
                } else {
                    entradaDados.question('\nDigite o inicio do multiplicador entre [1 ao 50] ', function(multiplicadorMinimo) {
                        let multiplicadorMini = Number(multiplicadorMinimo)
                        if (multiplicadorMini == '') {
                            console.log('\nERRO: Por favor digite algo nas entradas')
                            entradaDados.close()
                        } else if (isNaN(multiplicadorMini)) {
                            console.log('\nERRO: Por favor digite um número')
                            entradaDados.close()
                        } else if (multiplicadorMini < 2 || multiplicadorMini > 100) {
                            console.log('\nERRO: Por favor digite um número entre 2 e 100')
                            entradaDados.close()
                        } else {
                            entradaDados.question('\nDigite o fim do multiplicador entre [1 ao 50] ', function(multiplicadorMaximo) {
                                let multiplicadorMax = Number(multiplicadorMaximo)
                                if (isNaN(multiplicadorMax)) {
                                    console.log('\nERRO: Por favor digite um número')
                                    entradaDados.close()
                                } else if (multiplicadorMax < 2 || multiplicadorMax > 100) {
                                    console.log('\nERRO: Por favor digite um número entre 2 e 100')
                                    entradaDados.close()
                                } else {
                                    tabuadaModel.calculos(miniMultiplicando, maxMultiplicando, multiplicadorMax, multiplicadorMini)
                                    console.log('\nDeu certo "__" ')
                                    entradaDados.close()
                                }

                            })
                        }


                    })

                }

            })

    }
})