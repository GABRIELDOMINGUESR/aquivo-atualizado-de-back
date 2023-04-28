/*******************************************************************
 * Objetivo: Implementa a regra de negócio entre o app e a model 
 * Data: 2023-04-24
 * Autor: Gabriel Domingues
 * versão: 1.0
 ********************************************************************/
var alunoDAO = require('../model/DAO/alunoDAO.js')

console.log(alunoDAO);


//função para receber os dados do APP e enviar para a model 
const inserirAluno =  async function(dadosAlono) {

    //import do arquivo global do projetio
    let message = require('./modulo/config.js');

    
        //Validação dos dados
    if( dadosAlono.nome             == ''  || dadosAlono.nome           == undefined || dadosAlono.nome.length           > 100 || 
        dadosAlono.cpf              == ''  || dadosAlono.cpf            == undefined || dadosAlono.cpf.length            > 18  ||
        dadosAlono.rg               == ''  || dadosAlono.rg             == undefined || dadosAlono.rg.length             > 15  ||
        dadosAlono.data_nacimento   == ''  || dadosAlono.data_nacimento == undefined || dadosAlono.data_nacimento.length > 10  ||
        dadosAlono.email            == ''  || dadosAlono.email          == undefined || dadosAlono.email.length          > 250 
    ){
       return message.ERROR_REQUIRED_DATA;
    }else{
        //Envia os dads para a model a serem inseridos no DB
       let status = await alunoDAO.inserirAluno(dadosAlono);
        if (status) 
            return message.CREATED_ITEM
        else
            return message.ERROR_INTERNAL_SERVER    
    }
    

};

// função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function(dadosAlono) {

};
// função para excluir um aluno filtrado pelo id, que será encaminhado para a model 
const deletarAluno = function(id) {

}

// função para retornar todos os itens da tabela recebidos da model

//import do arquivo de acesso DB
const selecionarTodosAlunos = async function() {
    
    //solicta ao DAO todos os alunos do banco de dados 
    let dadosAluno = await alunoDAO.selectAllAluno();

    //cria um objeto do tipo json
    let dadosJSON = {}

    //valida se o DB teve registros
    if(dadosAluno){
        //Adiciona o array de alunos e um JSON para retornar ao app 
        dadosJSON.alunos = dadosAluno;
        return dadosJSON
    }else
        return false;
}

// função para retornar os dados da tabela recebidas do model pelo id
const buscarIDAluno = function(id) {

}


module.exports = {
    selecionarTodosAlunos,
    inserirAluno
}