/******************************************************************************************
 * Objetivo: API para interagir com o Banco de Dados (GET, POST, DELETE, PUT)
 * Autor: Gabriel Domingues
 * Data: 14/04/2023
 * Versão: 1.0
 ******************************************************************************************/

 /**
 * Express --> dependencia do Node, que permite a integração entre o protocolo http com o código
 * Comando para instalação do Express --> npm install express --save
 * 
 * Cors --> Gerenciador de permissões para o protocolo HTTP
 * Comando para instalação do Cors --> npm install cors --save
 * 
 * Body-Parser --> É uma dependencia que permite manipular dados enviados pelo body da requisição
 * Comando para instalação do Body-Parser --> npm install body-parser --save
 * 
 ***/

 /**
 * Para realizar a conexão com o Banco de Dados iemos utilizar o PRISMA
 *      npm install prisma --save
 *      npx prisma 
 *      npx prisma init
 *      npm install @prisma/client
 * 
 ***/



 //import das bibliotecas do projeto
 const express = require('express');

 const cors = require('cors');

 const bodyParser = require('body-parser');

 //Cria o objeto app utilizando a classe do express
 const app = express();

 app.use((request, response, next) => {

    //Permissões de origem da requisição
    response.header('Acess-Control-Allow-Origin', '*');

    //Permissões de metodos que serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Define as permissões para o cors
    app.use(cors());

    //Continua para a leitura dos EndPoints
    next();
 });

 //CRUD (Create, Read, Update e Delete)

 /******************************************************************************************
 * EndPoint: Tabela de aluno
 * Versão: 1.0
 * Data: 14/04/2023
 ******************************************************************************************/

//Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
const bodyJSON = bodyParser.json();

// Import da controller do Aluno
const controllerAluno = require('./controller/controller_aluno.js');
const message = require('./controller/modulo/config.js');



 //EndPoint: Retorna todos os dados de alunos
 app.get('/v1/lion-school/aluno', cors(), async function(request, response){
   
   // solicita a controller que retorne todos os alunos do BD
   let dados = await controllerAluno.selecionarTodosAlunos();

   // valida se existem registros para retornar na requisição
   if(dados){
      response.json(dados);
      response.status(200);
   }else{
      response.json();
      response.status(404)
   }
 })

 //EndPoint: Retorna dados do aluno pelo id
 app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

})

 //EndPoint: Inserir um novo aluno
 app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response){

   let contentType = request.headers['content-type'];

   if (String(contentType).toLowerCase() == 'application/json'){

   //Recebe os dados encaminhados do body da requisição
   let dadosBody = request.body;

   // Envia os dados para a controller
   let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

   
   // Retorna o status code e a message
   response.status(resultInsertDados.status);
   response.json(resultInsertDados)
   }else{
      response.status(message.ERROR_INFALID_CONTENT_TYPE.stauts)
      response.json(message.ERROR_INFALID_CONTENT_TYPE)
   }

})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response){
   
   //Recebe osdados do body 
   let dadosBody = request.body;
   //Recebe o id do aluno
   let idAluno = request.params.id;

   let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody, idAluno);

   response.status(resultUpdateDados.status);
   response.json(resultUpdateDados);



})

//EndPoint: Exclui um aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){
      
      
      //Recebe o id do aluno
      let idAluno = request.params.id;
   
      let resulDeletDados = await controllerAluno.deletarAluno(idAluno);
   
      response.status(resulDeletDados.status);
      response.json(resulDeletDados)


})

app.listen(8080, function(){
   console.log('Servidor aguardando requisições na porta 8080!')
})