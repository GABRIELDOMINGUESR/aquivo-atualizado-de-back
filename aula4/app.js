/**************************************
 * Objetivo: Realizar calculos matematicos
 * Data: 03/02/2023
 * Autor: Gabriel Domingues
 * Versão: 1.0
 *****************************************/

var matematica = require('./modulo/calculadora.js');


//Import da biblioteca
var readline = require('readline');
const { O_NOCTTY } = require('constants');

//Criar objeto para receber dados 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada dados Valor1
entradaDados.question('Valor: \n', function(numero1) {

    //replace - permite trocar um conteudo da string por outro
    let valor1 = numero1.replace(',', '.');


    //Entrada dados Valor2
    entradaDados.question('Valor2: \n', function(numero2) {

        let valor2 = numero2.replace(',', '.');


        // Entrada de dados Tipo de calculadora
        entradaDados.question('Escolha uma operação: [SOMAR | SUBITRAIR | MULTIPLICAR | DIVIDIR ]: \n', function(tipoCalculadora) {

            //toUppercase - Converter uma string para  MAIUSCULO
            //tolowerrCase - Converter uma string para minuscula
            let operacao = tipoCalculadora.toUpperCase();

            let resultado;

            //Validação de enttrada de dados vazia
            if (valor1 == '' || valor2 == '' || operacao == '') {

                console.log('Não é possivel calcular sem preencher os dados.');
                status = false

                //Validaçaõ para verificar se os dados são numeros
                //Podemos utiçizar (isNaN ou typeof) 
                //Se usar o typof, precisa garantir que o tipo de dados é genetico

                /*************************************************************************
                } else if (typeof(valor1) != 'number' || typeof(valor2) != 'number') {
                console.log('ERRO não é possivel calcular sem a entrada de numeros')
                **************************************************************************/

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO não é possivel calcular sem a entrada de numeros')
                status = false
            } else {

                //chama a função para calcular, encaminhar os dados para o calculo 
                resultado = matematica.calcular(valor1, valor2, operacao);

                //validar se o retorno da função é verdadeiro ou falso
                if (resultado == false && typeof(resultado) == 'Boolean')
                    entradaDados.close

                else
                    console.log(resultado);

            }
        })
    })
})