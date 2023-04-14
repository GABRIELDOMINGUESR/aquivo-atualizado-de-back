/************************************************************************************
 * Objetivo: Realizar a media escolar de 4 notas dos alunos   
 * Data: 30/01/2023  
 * Autor: Gabriel Domingues
 * Versão: 1.0
 ************************************************************************************/

console.log('CALCULADORA:')

// Bibliotea para entrada de dados
var readline = require('readline');
const { moveMessagePortToContext } = require('worker_threads');


// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função de Call-Back para o nome do aluno 
entradaDados.question('Escolha a formula: \n 1º: Adição \n 2º: Subitração \n 3º: Multiplicação \n 4º: divisão \n Escolha um dos campos:', function(numerodeOperação) {
    let formula = parseFloat(numerodeOperação)

    if (formula != 1 && formula != 2 && formula != 3 && formula != 4) {

        console.log('Erro campo não preenchido corretamente')

    } else {

    }

    /*if (formula == 1) {

                let resultado = numerodeOperação + numerodeOperação
                console.log(resultado)

            } else if (formula == 2) {

                let resultado = numerodeOperação - numerodeOperação
                console.log(resultado)

            } else if (formula == 3) {

                let resultado = numerodeOperação * numerodeOperação
                console.log(resultado)

            } else if (formula == 4) {

                let resultado = numerodeOperação / numerodeOperação
                console.log(resultado)

            } else {

            } {
               
*/

    /*if (formula == 1) {

        let resultado = numerodeOperação + numerodeOperação
        console.log(resultado)

    } else if (formula == 2) {

        let resultado = numerodeOperação - numerodeOperação
        console.log(resultado)

    } else if (formula == 3) {

        let resultado = numerodeOperação * numerodeOperação
        console.log(resultado)

    } else if (formula == 4) {
    
        let resultado = numerodeOperação / numerodeOperação
        console.log(resultado)
    } else {

    } {

    } {

    } {

    }
*/




});