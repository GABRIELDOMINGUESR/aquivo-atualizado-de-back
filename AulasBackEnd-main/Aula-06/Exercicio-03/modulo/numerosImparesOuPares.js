/******************************************************************************************
 * Objetivo: Sistema para gerenciar numeros impares ou pares
 * Data: 24/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

const numerosImparesOuPares = function(valorInicial, valorFinal, solicitacao) {
    let valorInicio = valorInicial;
    let valorFim = valorFinal;
    let tipoSolicitado = solicitacao.toUpperCase();
    let contador;
    let contadorDePares = 0;
    let contadorDeImpares = 0;

    if (tipoSolicitado == 'PARES') {
        console.log(`------------------------//Números ${tipoSolicitado}//------------------------`)
        while (valorInicio <= valorFim) {
            resultado = valorInicio % 2
            if (resultado == 0) {
                console.log(`${valorInicio}`)
                contadorDePares++
            }
            valorInicio++
        }
        console.log('------------------------//Quantidade de Números//------------------------')
        console.log(' Números Pares = ' + contadorDePares)
    } else if (tipoSolicitado == 'IMPARES') {
        console.log(`------------------------//Números ${tipoSolicitado}//------------------------`)
        while (valorInicio <= valorFim) {
            resultado = valorInicio % 2
            if (resultado != 0) {
                console.log(`${valorInicio}`)
                contadorDeImpares++
            }
            valorInicio++
        }

        console.log('\n------------------------//Quantidade de Números//------------------------')
        console.log('Numero Impares = ' + contadorDeImpares)
    } else if (tipoSolicitado == 'AMBOS') {
        contador = valorInicio
        console.log(`\n------------------------//conjunto de números Pares//------------------------\n`)
        while (contador <= valorFim) {
            resultado = contador % 2
            if (resultado == 0) {
                console.log(`${contador}`)
                contadorDePares++
            }
            contador++
        }
        contador = valorInicio
        console.log(`\n------------------------//Conjunto de números Impares//------------------------\n`)

        while (contador <= valorFim) {
            resultado = contador % 2
            if (resultado != 0) {
                console.log(`${contador}`)
                contadorDeImpares++
            }
            contador++
        }
        console.log('\n------------------------//Ambos os conjuntos//------------------------\n')
        console.log('Número Pares = ' + contadorDePares)
        console.log('Números Impares = ' + contadorDeImpares)
    }
}

module.exports = {
    numerosImparesOuPares
}