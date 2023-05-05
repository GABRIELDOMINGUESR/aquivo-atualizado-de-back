/******************************************************************************************
 * Objetivo: Realizar o calculo de uma tabuada tendo duas entradas a tabuada e o contador
 * Data: 09/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

//Retorna o resultado de uma tabuada
const calcularTabuada = function(multiplicando, maxMultiplicador) {
    let tabuada = Number(multiplicando);
    let maxContador = Number(maxMultiplicador);

    let cont = 0; //start da repetição
    let resultado;
    let status = true;

    //Validação de entrada vazio e entrada de 0 
    if (tabuada == 0 || maxContador == 0) {
        console.log('Erro: A tabuada não pode estar vazia ou não pode ser inserido o valor 0 na Tabuada');
        status = false;
    } //Validação de entrada de caracteres    
    else if (isNaN(tabuada) || isNaN(maxContador)) {
        console.log('Erro: Precisa ser inserido números na Tabuada');
        status = false;
    } else {
        for (let cont = 0; cont <= maxContador; cont++) {
            resultado = tabuada * cont;
            console.log(tabuada + 'x' + cont + '=' + resultado);
            //console.log(`${tabuada} x${cont} = ${resultado}`);
        }
    }

    // while (cont <= maxContador) {
    //     resultado = tabuada * cont;
    //     //2x0 = 0    
    //     console.log(tabuada + 'x' + cont + '=' + resultado);
    //     //cont = cont + 1;
    //     //cont++;
    //     cont += 1;

    // }

    return status;


};

//console.log(calcularTabuada(50, 10));

module.exports = {
    calcularTabuada
}