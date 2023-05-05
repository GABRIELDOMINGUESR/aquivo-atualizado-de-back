/******************************************************************************************
 * Objetivo: Realizar a interação do aluno com o Banco de Dados 
 * Autor: Gabriel Domingues
 * Data: 14/04/2023
 * Versão: 1.0
 ******************************************************************************************/

const { Prisma } = require('@prisma/client');

// Import da biblioteca do prisma client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client');

// Instancia da classe do PrismaClient
var prisma = new PrismaClient();

 //Inserir um novo registro no Banco de Dados
const insertAluno = async function(dadosAluno){

    // Script SQL para inserir os dados no BD
    sql = ` insert into tbl_aluno (nome, 
                                   cpf, 
                                   rg, 
                                   data_nascimento, 
                                   email)
                                   values
                                   (    '${dadosAluno.nome}',
                                       '${dadosAluno.cpf}',
                                        '${dadosAluno.rg}',
                                        '${dadosAluno.data_nascimento}',
                                        '${dadosAluno.email}'
                                    )`;
    //Executa o script SQL no BD e recebemos o retorno se deu certo ou não 
    let result = await prisma.$executeRawUnsafe(sql);
    
    if(result){
        return true;
    }else{
        return false;
    }
 }

 //Atualizar um registro existente no Banco de Dados
 const updateAluno = async function(dadosAluno){

    let sql = `update tbl_aluno set
                        nome =             '${dadosAluno.nome}',
                        rg   =             '${dadosAluno.rg}',
                        cpf  =             '${dadosAluno.cpf}',
                        data_nascimento  = '${dadosAluno.data_nascimento}',
                        email  =           '${dadosAluno.email}'

                        where id =          ${dadosAluno.id}`;

    //Executa o script no banco de dados 
    let result = await prisma.$executeRawUnsafe(sql);

    if (result) 
        return true;
    else
        return false;
}

//Ecluir um registro do Banco de Dados
const deleteAluno = async function(id){

    let sql = `delete from tbl_aluno where id = ${id}`;

//Executa o script no banco de dados 
    let result = await prisma.$executeRawUnsafe(sql);

    if (result) 
        return true;
    else
        return false;

}

//Retorna todos os registro do Banco de Dados
const selectAllAluno = async function(){

    // Variavel com o scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno';

    // Executa no BD o scriptSQL
        // $queryRawUnsafe() é utilizado quando o scriptSQL esta em uma variavel
        // $queryRaw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw(select * from tbl_aluno))
    let rsAluno = await prisma.$queryRawUnsafe(sql);


    // Valida se o BD retornou algum registro
    if(rsAluno.length > 0){
        return rsAluno;
    }else{
        return false;
    }
        

}

//Retorna um registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function(id){

    let { PrismaClient } = require('@prisma/client');

    let prisma = new PrismaClient();

    


}

module.exports = {
    selectAllAluno,
    insertAluno,
    updateAluno,
    deleteAluno
}