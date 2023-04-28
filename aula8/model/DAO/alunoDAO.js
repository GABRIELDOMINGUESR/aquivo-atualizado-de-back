/*******************************************************************
 * Objetivo: realizar a interação do aluno com o banco de dados 
 * Data: 2023-04-14
 * Autor: Gabriel Domingues
 * versão: 1.0
 ********************************************************************/


//import da biblioteca do prisma client (responsavel por manipular dados DB)
const {PrismaClient} = require('@prisma/client')
 
//instancia da classe do prisma client
const prisma = new PrismaClient();




//Inserir um novo registro no banco de dados 
const insertAluno = async function(dadosDoAluno){

    //Script parainserir o ndados no DB
   let sql = `insert into tbl_aluno(
                                    nome,
                                    cpf,
                                    rg,
                                    data_nacimento,
                                    email
                                    )
                                    values
                                    ('${dadosDoAluno.nome}',
                                     '${dadosDoAluno.cpf}',
                                     '${dadosDoAluno.rg}',
                                     '${dadosDoAluno.data_nacimento}',
                                     '${dadosDoAluno.email}'
                                     )`;


console.log(sql);


//Executa o xcript SQL no DB e cebemos o retorno se deu certo ou não 
let result = await prisma.$executeRawUnsafe(sql);

if(result)
    return true
else
    return false;


}

//Atualizar um registro no banco de dados 
const updateAluno = function(dadosDoAluno){

}

//Deletar um registro no banco de dados 
const deleteAluno = function(id){

}

//Retorna todos os registros no banco de dados 
const selectAllAluno = async function(){
 
 //variavel com o script para executar no DB
 let sql = 'select * from tbl_aluno';

 //Executa no DB o scriptSQL
 //$queryRawUnsafe() é utilizado quando o scriptSQL está em uma variavel 
 //$queryRaw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw('select * from tbl_aluno'))
 let result = await prisma.$queryRawUnsafe(sql);

 // Valida se o DB retornou algum registro
 if(result.length > 0)
    return result;
else 
    return false;

}
 console.log(selectAllAluno);

//Retorna um registro do banco de dados filtrado pelo ID
const selectByIdAluno = function(id){

}

module.exports = {
    selectAllAluno,
    insertAluno
}

