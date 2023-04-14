/************************************************************************************
 * Objetivo: Realizar a media escolar de 4 notas dos alunos   
 * Data: 27/01/2023  
 * Autor: Gabriel Domingues
 * Versão: 1.0
 ************************************************************************************/

console.log('Sistema de Calculo de Médias Escolares');

// Bibliotea para entrada de dados
var readline = require('readline');
const { moveMessagePortToContext } = require('worker_threads');


// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**********************************************************************************************************************************

VAR: O variable statement declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização. 
        Toda variavel criada como  var, tem por objetivo ser um escopo global

LET: permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
        Toda variavel criada como let, tem por objetivo ser um escopo local, ou seja, será utilizada somente naquela função.

CONST: Tem por objetivo criar um espaço em memória para armazenar dados em memória que não sofrem mudança.
            A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.

***********************************************************************************************************************************/



// Função de Call-Back para o nome do aluno 
entradaDados.question('Digite o  nome do aluno \n', function(nome) {

    //variavel local para receber o nome do aluno, que vai ser retornado pela função
    let nomeAluno = nome;

    //Função de call-back para entrada de nota 1
    entradaDados.question('Digite a nota1: \n', function(nota1) {
        let primeiraNota = nota1;

        entradaDados.question('Digite a nota2: \n', function(nota2) {
            let segundaNota = nota2;

            entradaDados.question('Digite a nota3: \n', function(nota3) {
                let terceiraNota = nota3;

                entradaDados.question('Digite a nota4: \n', function(nota4) {
                    let quartaNota = nota4;
                    let media = 0;

                    /***********************************************************************
                                        OUTRA FORMA DE SE FAZER
           
                    entradaDados.question('Digite a nota1: \n', function(nota1) {
                        let primeiraNota = Number(nota1);
                
                        entradaDados.question('Digite a nota2: \n', function(nota2) {
                            let segundaNota = Number(nota2);
                
                            entradaDados.question('Digite a nota3: \n', function(nota3) {
                                let terceiraNota = Number(nota3);
                
                                entradaDados.question('Digite a nota4: \n', function(nota4) {
                                    let quartaNota = Number(nota4);
                                    let media = 0;

                    ****************************************************************************/

                    /************************************************************************************************************************************************************************************************************************************************
                     
                     *Conversão de dados String para numero
                     
                      *Number.parseInt() ou parseInt() - converte para Imteiro \A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN/
                      *Number.parseFloat() ou parseFloat() - converte para Real    \A função parseFloat analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal)./ 
                      *Number() - converte para int ou float, conforme a entrada do dado \O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos. Um objeto Number é criado utilizando o construtor Number(./
                     
                     *
                     
                     *Operadores de comparação:
                      
                       * == (Verificar a igualdade de conteudo)
                       * != (Verificar a diferença de conteudo)
                       * <  (Verificar o menor valor)
                       * >  (Verificar o maior valor)
                       * <= (Verificar o menor ou igual valor)
                       * >= (Verificar o maior ou igual valor)
                       * === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                       * !== (que significa estritamente não igual que retorna true caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.)
                       
                       Ex: 
                           0 == 0     V
                           0 == '0'   V     
                           0 === '0'  F
                           0 ==! 0.0  F

                    *Operadores Lógicos
                       * OU         || (Pipe) ou  (or)
                       * E          &&             (AND)
                       * Negação    !               (NOT)
                       * 
                       *Ordem de execução de operadores lógicos 
                       * 0º ()
                       * 1º Negação
                       * 2º E
                       * 3º OU
                       *
                       * 
                       *      
                       ***************************************************************************************************************************************************************************************************************************************************/



                    if (
                        primeiraNota == '' ||
                        segundaNota == '' ||
                        terceiraNota == '' ||
                        quartaNota == '') {

                        console.log('ERRO: É necessário digitar algum valor nas entradas. ');

                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota))

                    {
                        console.log('ERRO É necessário digitar numeros nas entradas.')

                    } else if (

                        primeiraNota < 0 || primeiraNota > 100 ||
                        segundaNota < 0 || segundaNota > 100 ||
                        terceiraNota < 0 || terceiraNota > 100 ||
                        quartaNota < 0 || quartaNota > 100) {

                        console.log('ERRO: sistema só aceita notas de 0 a 10. ');
                    } else {

                        if (media >= 70) {
                            console.log('Aluno APROVADO');

                        } else {
                            console.log('Aluno REPROVADO');
                        }
                    }

                })
            })
        })
    })
});