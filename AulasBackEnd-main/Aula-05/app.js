/******************************************************************************************
 * Objetivo: Realizar o calculo de uma tabuada tendo duas entradas a tabuada e o contador
 * Data: 09/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

var funCalcularTabuada = require('./modulo/tabuada');

//Import da biblioteca para entrada de dados
var readline = require('readline');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('multiplicando: \n', function(valor1) {
    let multiplicando = valor1.replace(',', '.');

    entradaDados.question('multiplicador: \n', function(valor2) {
        let multiplicador = valor2.replace(',', '.');
        let resultado = funCalcularTabuada.calcularTabuada(multiplicando, multiplicador);

        entradaDados.close();


    });

})