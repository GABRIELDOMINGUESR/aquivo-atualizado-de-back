/*********************************************************
 * Objetivo: API para interagir com banco de dados (GET, POST, PUT, DELETE)
 * Data: 2023-04-14
 * Autor: Gabrel Domingues
 * Versão: 1.0
 * CRUD:
 
 * Para realizar a conexão com Banco de dados iremos utilizar o Prisma:
    npm install prisma --save 
    npx prisma 
    npx prisma init
    npm install @prisma/client


 ************************************************************************************/

//importdas dependencias 
const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');


//cria o objeto app utilizando a classe do express
const app = express();
app.use( require, response, next =>{


    

    //Permissões de origem da requisição 
    response.header('Access-Control-Allow-Origin', '*');

    //Permissões de metodos que serão utilizandos na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Defini as permissões para cors
    app.use(cors());

    //Continua para a eitura dos EndPoints
    next();
});

/***************************************************
 * EndPoint: Tabela de Alunos
 * Versão: 1.0.
 * 2023-04-14
 *****************************************************/


//EndPoint: retorna todos os dados dos alunos
app.get('/v1/lion-school/aluno', cors(), async, function(request, response){


})

//EndPoint: retorna os dados dos alunos pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response){


})

//EndPoint: inserie novo aluno
app.post('/v1/lion-school/aluno', cors(), async, function(request, response){


})

//EndPoint: atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response){


})

//EndPoint: deleta um aluno pelo ID
app.delete('/v1/lion-school/aluno', cors(), async, function(request, response){


})
