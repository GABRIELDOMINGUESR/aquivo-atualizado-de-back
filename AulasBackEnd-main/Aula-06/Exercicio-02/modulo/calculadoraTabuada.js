/******************************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 17/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

const calculadoraTabuada = function(multiplicandoInicial, multiplicandoFinal, multiplicadorInicial, multiplicadorFinal) {

    let multiplicandoInicio = Number(multiplicandoInicial);
    let multiplicandoFim = Number(multiplicandoFinal)
    let multiplicadorInicio = Number(multiplicadorInicial)
    let multiplicadorFim = Number(multiplicadorFinal)

    let contador; //start da repetição
    
    // let status = true;
    // //Validação de entrada vazio e entrada de 0 
    // if (multiplicandoInicio == 0 || multiplicandoFim == 0 || multiplicadorInicio == 0 || multiplicadorFim == 0) {
    //     console.log('Erro: A tabuada não pode estar vazia ou não pode ser inserido o valor 0 na Tabuada');
    //     status = false;
    // } //Validação de entrada de caracteres    
    // else if (isNaN(multiplicandoInicio) || isNaN(multiplicandoFim) || isNaN(multiplicadorInicio) || isNaN(multiplicadorFim)) {
    //     console.log('Erro: Precisa ser inserido números na Tabuada');
    //     status = false;
    // } 
        while (multiplicandoInicio <= multiplicandoFim) {
            console.log(`\n------------------------//Tabuada do = ${multiplicandoInicio}//------------------------\n`)
            contador = multiplicadorInicio
            while (contador <= multiplicadorFim) {
                let resultado = multiplicandoInicio * contador
                console.log(`${multiplicandoInicio} x ${contador} = ${resultado}`)
                contador++
            }
            multiplicandoInicio++
    }
}
module.exports = {
    calculadoraTabuada
}