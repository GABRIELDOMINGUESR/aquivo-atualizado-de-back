/******************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 13/02/2023
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Versão: 1.0
 ******************************************************************************************/

var funMediasEscolares = require('./modulo/medias-escolares');

//Import da biblioteca para entrada de dados
var readline = require('readline');
const { mediaescolar } = require('./modulo/medias-escolares');

//Cria um objeto para receber os dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let generoAluno;
let generoProfessor2;
let nomeProfessor;
let nomeCurso;
let nomeDisciplina;
let exame;

entradaDados.question('Qual é o genero do Estudante? [Aluna, Aluno] \n', function(generoAluno) {

    if (generoAluno.toLocaleUpperCase() === "ALUNA") {
        generoAluno = "A Aluna";
        generoIncorreto = false
    } else if (generoAluno.toLocaleUpperCase() === "ALUNO") {
        generoAluno = "O Aluno";
        generoIncorreto = false
    } else {
        console.log('Digite Aluno ou Aluna para escolher o genero do seu Estudante')
        generoIncorreto = true

    }
    if (generoAluno == '' || generoIncorreto == true) {
        console.log('Por favor preencha o genero do aluno corretamente');
        entradaDados.close();
    } else
        entradaDados.question('Qual é o nome do Estudante? \n', function(nomeAluno) {
            let nomeDoAluno = nomeAluno.toUpperCase();
            if (nomeAluno == '') {
                console.log('Por favor preencha o nome do aluno corretamente');
                entradaDados.close();
            } else


                entradaDados.question('Qual é o genero do Professor? [Professora, Professor] \n', function(generoProfessor2) {




                if (generoProfessor2.toLocaleUpperCase() === "PROFESSORA") {
                    var generoProfessor2 = "professora";
                    generoIncorreto = false
                } else if (generoProfessor2.toLocaleUpperCase() === "PROFESSOR") {
                    var generoProfessor2 = "professor";
                    generoIncorreto = false
                } else {
                    console.log('Digite Professor ou Professora para escolher o genero do seu Professor')
                    generoIncorreto = true

                }
                if (generoProfessor2 == '' || generoIncorreto == true) {
                    console.log('Por favor preencha o Genero do Professor corretamente');
                    entradaDados.close();
                } else

                    entradaDados.question('Qual é o nome do(a) Professor(a)? \n', function(nomeProfessor) {
                    if (nomeProfessor == '') {
                        console.log('Por favor preencha o nome do professor corretamente');
                        entradaDados.close();
                    } else
                        entradaDados.question('Qual é o nome do(a) curso? \n', function(nomeCurso) {
                            if (nomeCurso == '') {
                                console.log('Por favor preencha o nome do curso corretamente');
                                entradaDados.close();
                            } else


                                entradaDados.question('Qual é o nome da disciplina? \n', function(nomeDisciplina) {
                                if (nomeDisciplina == '') {
                                    console.log('Por favor preencha o nome da disciplina corretamente');
                                    entradaDados.close();
                                } else

                                    entradaDados.question('Qual a primeira nota? \n', function(nota1) {

                                    entradaDados.question('Qual a segunda nota? \n', function(nota2) {

                                        entradaDados.question('Qual a terceira nota? \n', function(nota3) {

                                            entradaDados.question('Qual a quarta nota? \n', function(nota4) {
                                                let media = funMediasEscolares.mediaescolar(nota1.trim(), nota2.trim(), nota3.trim(), nota4.trim(), false);



                                                if (media < 50) {
                                                    var resultadoAluno = "REPROVADO";
                                                    console.log(generoAluno + '' + '[' + nomeDoAluno + ']' + '' + 'foi' + '' + '[' + resultadoAluno + ']' + '' + 'na disciplina' + '' + '[' + nomeDisciplina + '].' + '\n' +
                                                        'Curso:' + nomeCurso + '\n' +
                                                        generoProfessor2 + ':' + nomeProfessor + '\n' +
                                                        'Notas dos Alunos:' + nota1 + '/' + nota2 + '/' + nota3 + '/' + nota4 + '\n' +
                                                        'Média Final:' + media);
                                                    entradaDados.close();
                                                } else if (media >= 70) {
                                                    var resultadoAluno = "APROVADO";
                                                    console.log(generoAluno + '' + '[' + nomeDoAluno + ']' + '' + 'foi' + '' + '[' + resultadoAluno + ']' + '' + 'na disciplina' + '' + '[' + nomeDisciplina + '].' + '\n' +
                                                        'Curso:' + nomeCurso + '\n' +
                                                        generoProfessor2 + ':' + nomeProfessor + '\n' +
                                                        'Notas dos Alunos:' + nota1 + '/' + nota2 + '/' + nota3 + '/' + nota4 + '\n' +
                                                        'Média Final:' + media);
                                                    entradaDados.close();
                                                } else if (media >= 50 && media <= 69) {
                                                    entradaDados.question('Qual é a nota do Exame? ', function(notaExame) {
                                                        exame = Number(notaExame);


                                                        if (exame >= 60) {
                                                            resultadoAluno = "Aprovado No Exame"
                                                            let resultadoExame = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4, exame);

                                                            console.log(generoAluno + '[' + nomeDoAluno + '] foi [' + resultadoAluno + ']' + 'na disciplina' + '[' + nomeDisciplina + ']. \n' +
                                                                'Curso:' + nomeCurso + '\n' +
                                                                generoProfessor2 + ':' + nomeProfessor + '\n' +
                                                                'Notas dos Alunos:' + nota1 + '/' + nota2 + '/' + nota3 + '/' + nota4 + '/' + exame + '\n' +
                                                                'Média Final:' + media + '\n' +
                                                                'Média Final Exame:' + resultadoExame);
                                                            entradaDados.close();
                                                        } else if (exame < 60) {
                                                            resultadoAluno = "Reprovado No Exame";
                                                            let resultadoExame = funMediasEscolares.mediaescolar(nota1, nota2, nota3, nota4, exame);


                                                            console.log(generoAluno + '[' + nomeDoAluno + '] foi [' + resultadoAluno + ']' + 'na disciplina' + '[' + nomeDisciplina + ']. \n' +
                                                                'Curso:' + nomeCurso + '\n' +
                                                                generoProfessor2 + ':' + nomeProfessor + '\n' +
                                                                'Notas dos Alunos:' + nota1 + '/' + nota2 + '/' + nota3 + '/' + nota4 + '/' + exame + '\n' +
                                                                'Média Final:' + media + '\n' +
                                                                'Média Final Exame:' + resultadoExame);
                                                            entradaDados.close();
                                                        }


                                                    });



                                                }



                                            });

                                        });
                                    });
                                });
                            });

                        });

                });


            });

        });

});
module.exports = {
    mediaescolar
}