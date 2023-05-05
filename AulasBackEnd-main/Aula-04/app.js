/**************************************************************************************************
 * Objetivo: Realizar uma calculadora com os cálculos: adição, subtração, divisão e multiplicação
 * Data: 03/02/2023
 * Aluno: Gustavo Prevelate Ribeiro Da Silva
 *  Versão: 1.0
 **************************************************************************************************/

var matematica = require('./modulo/calculadora.js')

//Import da biblioteca para entrada de dados
var readline = require('readline');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados valor1
entradaDados.question('valor1: \n', function(numero1) {
    //replace - permite trocar o contedo da string por outro(Somente em String)
    let valor1 = numero1.replace(',', '.');

    //Entrada de dados valor2
    entradaDados.question('valor2: \n', function(numero2) {

        let valor2 = numero2.replace(',', '.');

        //entrada de dados tipo de calculo
        entradaDados.question('Escolha uma operação: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: \n', function(tipoCalculo) {

            //toUpperCase - Converte uma string para MAIUSCULO
            //toLowerCase - Converte uma string para minusculo

            let operacao = tipoCalculo.toLocaleUpperCase();
            let resultado;

            //Valição de entrada de dados vazio
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('Erro: Não é possível calcular sem preencher todos os dados.');
                entradaDados.close();
                //Fecha o objeto de entrada de dados (encerra o programa)
                //Validação para verificar se os dados digitados são numeros
                //Podemos utilizar (isNan ou typeof)
                //Se usar o typeof, precisa garantir que o tipo de dados não é generico (String)
                //}else if (typeof(valor1) != 'number' || typeof(valor2) != 'number'){
            } else if (isNaN(valor1 || isNaN(valor2))) {
                console.log('Erro: Não é possível calcular se a entrada de valores númericos.');
                entradaDados.close();
                //Fecha o objeto de entrada de dados (encerra o programa)
            } else {

                //Recebe da função o calculo das operações (função que nós criamos)
                resultado = matematica.calcular(valor1, valor2, operacao);

                //Verifica se o retorno da função é válido se for exibe o valor
                //Se não encerra o programa 
                //if (resultado == false && typeof(resultado) == 'boolean')
                if (resultado === false)
                    entradaDados.close();
                else
                    console.log(resultado);

            }
        })
    })
})