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






//cria o objeto app utilizando a classe do express
const app = express();
app.use( (request, response, next) =>{

    //Permissões de origem da requisição 
    response.header('Access-Control-Allow-Origin', '*');

    //Permissões de metodos que serão utilizandos na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Defini as permissões para cors
    app.use(cors());

    //Continua para a leitura dos EndPoints
    next();
});

/***************************************************
 * EndPoint: Tabela de Alunos
 * Versão: 1.0.
 * 2023-04-14
 *****************************************************/

//criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
const bodyJSON = bodyParser.json();


const controllerAluno = require('./controler/controller_aluno.js');


//EndPoint: retorna todos os dados dos alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response){


//solicita a controller que retorne todos ps alunos BD
let dados = await controllerAluno.selecionarTodosAlunos();
    
if(dados){
        response.json(dados);
        response.status(200);
    }else{
        response.json();
        response.status(404);
    }
})

//EndPoint: retorna os dados dos alunos pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){


})

//EndPoint: inserie novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response){
let dadosbody = request.body;


let resultInsertDados = await controllerAluno.inserirAluno(dadosbody);

//Retorna o status code e a message
    response.status(resultInsertDados.status);
    response.json(resultInsertDados);

})

//EndPoint: atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){


})

//EndPoint: deleta um aluno pelo ID
app.delete('/v1/lion-school/aluno', cors(), async function(request, response){


})

app.listen(8080, function(){
    console.log('Aguardando equisição')
})