/***********************************************************************************************
 * Arquivo de funções prara calcular uma tabuada de um numero até um contador quanquer
 * Data 06/02/2023 
 * Autor: Gabriel Domingues
 * Versão 1.0 
 ************************************************************************************************/


//Calcula uma tabuada 
const tabuada = function(multiplicando, maxMultiplicador) {
    let tabuada = Number(multiplicando);
    let contador = Number(maxMultiplicador);
    let contTabuada = 0; //Start da repetição
    let status = true;
    let resultado;

    if (tabuada == 0 || contador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(contador))
        status = false;
    else {

        while (contTabuada <= contador) {
            resultado = tabuada * contTabuada;
            //2x0=0
            // console.log(tabuada + 'x' + contTabuada + '=' + resultado);
            console.log(`${tabuada} x ${contTabuada} = ${resultado}`);

            // contTabuada = contTabuada + 1;
            contTabuada++;
            // contTabuada +=1; se voçê trocar o valor do 1 por 2 ou 3 etc, ele vai somar ao valor colocado 

        }
    }

    return status;
}


tabuada(00100, 3000)


module.exports = {
    tabuada
}