/*******************************************************************************************************
 * objetivo: criar uma média par uma faculdade de 4 notas e se nessesario a nota de um exame 
 *           onde deve ser mostrado se o aluno foi aprovado ou reprovado, as notas devem ser de 0 a 100 
 
 * Data: 10/02/2023  
 * Autor: Gabriel Domingues
 * Versão: 1.0
 **********************************************************************************/
var sistemaMedia = require('./modulo/faculdade.js');


// Bibliotea para entrada de dados
var readline = require('readline');
const { moveMessagePortToContext } = require('worker_threads');
const { mediaExame } = require('./modulo/faculdade.js');


// Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(' \nSistema de Calculo de Médias Da Faculdade');

console.log('\n************************INFORMAÇÃO ALUNO************************************* \n ')
entradaDados.question('Digite o nome do aluno(a): \n', function(nome) {
    let nomeAluno = nome;
    if (nomeAluno == '') {
        console.log('ERRO: Não é possível continuar com entrada vazia')
        entradaDados.close()
    } else {
        entradaDados.question('Digite o sexo do aluno(a) [Feminino] e [masculino]: \n', function(generoAluno) {
            let generoAlunos = generoAluno.toUpperCase;

            if (generoAlunos == '') {
                console.log('ERRO: Não é possível continuar com entrada vazia')
                entradaDados.close()

            } else if (
                generoAlunos != 'MASCULINO' && generoAlunos != 'FEMININO'
            ) {
                console.log('ERRO: Gênero não cadastrado, favor escolher FEMININO ou MASCULINO \n')
            }

            console.log('\n*************************PROFESSOR***************************** \n ')

            entradaDados.question('Digite o nome do Professor(a): \n ', function(nomeDoProfessor) {
                let nomeProf = nomeDoProfessor;
                if (nomeProf = '') {
                    console.log('ERRO: Não é possível continuar com entrada vazia')
                    entradaDados.close()
                } else {
                    entradaDados.question('Digite o sexo do Professor(a) [Feminino] e [Masculino]: \n ', function(generoDoProfessor) {
                        let generoProf = generoDoProfessor.toUpperCase;

                        if (generoProf = '') {
                            console.log('ERRO: Não é possível continuar com entrada vazia')
                            entradaDados.close()
                        } else if (generoProf != 'MASCULINO' && generoProf != 'FEMININO') {
                            console.log('ERRO: Gênero não cadastrado, favor escolher FEMININO ou MASCULINO')
                        }

                        console.log('\n*******************************Curso*************************************')
                        entradaDados.question('Qual o curso: \n', function(curso) {
                            let cursoFacul = curso
                            if (cursoFacul = '') {
                                console.log('ERRO: Não é possível continuar com entrada vazia')
                                entradaDados.close()
                            }
                            console.log('\n********************MATÉRIA*********************************')

                            entradaDados.question('Digite a Matéria: \n', function(nomeMateria) {
                                let materia = nomeMateria;
                                if (materia = '') {
                                    console.log('ERRO: Não é possível continuar com entrada vazia')
                                    entradaDados.close()
                                }

                                console.log('\n************************************************************')

                                entradaDados.question('Digite a nota1: \n', function(nota1) {
                                    let primeiraNota = Number(nota1);

                                    entradaDados.question('Digite a nota2: \n', function(nota2) {
                                        let segundaNota = Number(nota2);

                                        entradaDados.question('Digite a nota3: \n', function(nota3) {
                                            let terceiraNota = Number(nota3);

                                            entradaDados.question('Digite a nota4: \n', function(nota4) {
                                                let quartaNota = Number(nota4);




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

                                                    console.log('ERRO: sistema só aceita notas de 0 a 100. ');
                                                } else {

                                                    let resultadoFinal2 = sistemaMedia.media(primeiraNota, segundaNota, terceiraNota, quartaNota)

                                                    if (resultadoFinal2 > 50 && resultadoFinal2 < 69) {
                                                        console.log('******************Aluno necessita de exame!*****************************\n')
                                                        entradaDados.question('Digite a nota do exame: ', function(notaDoexameDigitada) {

                                                                let digitadaNotaDoExame = Number(notaDoexameDigitada);

                                                                let resultadoExameFinalEnd = sistemaMedia.mediaExame(digitadaNotaDoExame, resultadoFinal2)

                                                        

                                                            })

                                                    } else {

                                                        let alunostatus = sistemaMedia.statusAluno(resultadoFinal2,genero)
                                                        console.log(`O aluno ${nomeAluno} foi ${}`)
                                                        



                                                    }
                                                }

                                            })
                                        })
                                    })
                                })

                            })

                        })
                    })
                }
            })
        })
    }
});