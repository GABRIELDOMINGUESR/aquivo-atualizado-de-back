/************************************************************* 
 * Objetivo: Arquivo de funções para realizar calculos matematicos
 * Data: 02/03/2023
 * Autor: Gabriel
 * Versão: 1.0
 *************************************************************/
//Forma 1 de criar uma função em JS
//Realizar calculo matemático das 4 operações (Somar, Multiplicar, Dividir e Subitrair)
function calcular(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let estatus = true; // Variavel Boolean para identificar o estatus do calculo


    switch (operacao) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break;

        case 'SUBITRAIR':
            resultado = subitrair(valor1, valor2)
            break;

        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break;

        case 'DIVIDIR':
            // //Validar a divisão por 0
            if (valor2 == 0) {

                console.log('ERRO: não é possivel dividir por 0')
                    //entradaDados.close();
                status = false

            } else
                resultado = dividir(valor1, valor2)
            break;

            //Similar ao else final de uma estrutura baseada em if / else (Se nenhuma das opções for verdadeira, sempre passará pelo default// )
        default:
            console.log('ERRO: Operação informada é invalida. Confira a sua entrada')
                //entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)
            status = false
    }


    //Validação para tratar a variavel resultado quando menhum calculo é realizado
    if (resultado != undefined)
        return resultado;
    else
        return status;

}

//Forma 2 de criar uma função
// const calcular = function(numero1, numero2, tipoCalculo){

// }

//Forma 3 de criar uma função
const somar = (valor1, valor2) => Number(valor1) + Number(valor2);

const subitrair = (valor1, valor2) => Number(valor1) - Number(valor2);

const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2);

const dividir = (valor1, valor2) => Number(valor1) / Number(valor2);


//exporta  uma função para ser ultilizada em outro arquivo
module.exports = {
    calcular
}