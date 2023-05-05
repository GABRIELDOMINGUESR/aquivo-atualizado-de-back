/******************************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Gustavo Prevelate Ribeiro Da Silva
 * Data: 10/03/2023
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

//import das dependencias para criar a API
//Responsável pelas requisições
const express = require('express');

//Responsável pelas permissões
const cors = require('cors');

//Responsável pela manipulação do body da requisição 
//Body conteudo da mensagem --> Header e Main
const bodyParser = require('body-parser');

//Import do arquivo de funções 
const estadosCidades = require('./modulo/estados_cidades.js');

//Cria um objeto com as informações da classe express
const app = express();

//Define as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    // * --> significa que a API será publica
    // IP --> se colocar o IP, a API somente responderá para aquela Máquina/Servidor/Requisição
    response.header('Access-Control-Allow-Origin', '*');

    //Permite gerenciar quais verbos (metodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors());

    next();
});
//endPoints


//endPoint para listar os Estados
app.get('/v1/senai/lista-de-estados', cors(), async function(request, response, next) {

    //Chama a função que retorna os estado
    let listaDeEstados = estadosCidades.getListaDeEstados();
    
    //Tratamento para validar se a função realizou o processamento
    if(listaDeEstados){
        //Retorna o Json e o Status code
        response.json(listaDeEstados);
        response.status(200);
    }else{
        response.status(500);
    }

});

//endPoint: Lista as caracteristicas do estado pela sigla

app.get('v1/senai/estado/sigla/:uf', cors(), async function(request, response, next){
    //:uf - é uma variavel que será utilizada para passagens de valores, na URL da requisição

    //Recebe o valor da variável uf, que será encaminhada na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    //Tratamento para validar os valores encaminhados no parametro 
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado))
    {
        statusCode = 400;
        dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)"
    }else{
        //Chama a função que filtra o estado pela sigla
        let estado = estadosCidades.getDadosEstados(siglaEstado);
        
        //Valida se houve retorno válido da função 
        if(estado){
            statusCode = 200; //Estado Encontrado
            dadosEstado = estado;
        }else{
            statusCode = 404; //Estado não encontrado
            dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não existe";
        }
    }

    response.status(statusCode);
    response.json(dadosEstado);
 
});

//endPoint: Lista a capital do estado pela sigla

app.get('v1/senai/capital/sigla/:uf', cors(), async function(request, response, next){

    let siglaCapital = request.params.uf;
    let statusCode;
    let dadosCapital = {};

    if(siglaCapital == '' || siglaCapital == undefined || siglaCapital.length != 2 || !isNaN(siglaCapital)){
        statusCode = 400;
        dadosCapital.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)" 
    } else{

        let capital = estadosCidades.getCapitalEstado(siglaCapital);

        if(capital){
            statusCode = 200;
            dadosCapital = capital;
        }else{
            statusCode = 404;
            dadosCapital.message = "Não é possivel processar a requisição pois a sigla do estado não existe";
        }
    }
    response.status(statusCode);
    response.json(dadosCapital);
});

//endPoint: Lista a os estados que estão em uma determinada região pela sigla da região

app.get('/v1/senai/regiao-estado/regiao/:regiao', cors(), async function(request, response, next){

    let regiaoEstado = request.params.regiao;
    let statusCode;
    let dadosRegiao = {};
    

    if(regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)){
        statusCode = 400;
        dadosRegiao.message = "Não é possivel processar a requisição pois a região não foi encontrada" 
    }else {
        let regiao = estadosCidades.getEstadosRegiao(regiaoEstado.toLowerCase());

        if(regiao){
            statusCode = 200;
            dadosRegiao = regiao;
        }else{
            statusCode = 404;
            dadosRegiao.message = "Não é possivel processar a requisição pois a sigla da região não existe";
        }
    }

    response.status(statusCode);
    response.json(dadosRegiao);
})

//endPoint: Lista as antigas e a atual capital do estado

app.get('/v1/senai/capital-pais', cors(), async function(request, response, next){

    let statusCode;
    let capitalPais = {};
    

    if(capitalPais == '' || capitalPais == undefined || !isNaN(capitalPais)){
        statusCode = 400;
        capitalPais.message = "Não é possivel processar a requisição" 
    }else {
        let capitalP = estadosCidades.getCapitalPais();

        if(capitalP){
            statusCode = 200;
            capitalPais = capitalP;
        }else{
            statusCode = 404;
            capitalPais.message = "Não é possivel processar a requisição 2";
        }
    }

    response.status(statusCode);
    response.json(capitalPais);
});

//endPoint: Lista as cidades de um estado pela sigla 

// app.get('/cidades-estados/cidades/:uf', cors(), async function(request, response, next){

//     let cidadesEstado = request.params.uf;
//     let statusCode;
//     let cidadesES = {};
    

//     if(cidadesEstado == '' || cidadesEstado == undefined || !isNaN(cidadesEstado)){
//         statusCode = 400;
//         cidadesEs.message = "Não é possivel processar a requisição pois sigla não foi encontrada" 
//     }else {
//         let cidades = estadosCidades.getCidades(cidadesEstado);

//         if(cidades){
//             statusCode = 200;
//             cidadesES = cidades;
//         }else{
//             statusCode = 404;
//             cidadesES.message = "Não é possivel processar a requisição pois a sigla do estado não existe";
//         }
//     }

//     response.status(statusCode);
//     response.json(cidadesES);

// });

//EndPoint: Lista de cidades filtrada pela sigla do estado 
app.get('/v1/senai/cidades', cors(), async function(request, response, next) {

    //Recebe o valor da variavel que será enviada por QueryString
        //Ex: www.uol.com.br?uf=sp&cep=085561008$nome=jose
        /**
         *      Usamos a query para receber diversas variaveis para realizar filtros
         *      Usamos o params para receber o ID (PK), geralmente para fazer o PUT, DELETE, GET 
         */
    let siglaEstado = request.query.uf;
    // let cep = request.query.cep;
    // console.log(siglaEstado)
    // console.log(cep)

    let statusCode;
    let dadosCidades = {};
    

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidadesEs.message = "Não é possivel processar a requisição pois sigla não foi encontrada" 
    }else {
        let cidades = estadosCidades.getCidades(siglaEstado);

        if(cidades){
            statusCode = 200;
            dadosCidades = cidades;
        }else{
            statusCode = 404;
            dadosCidades.message = "Não é possivel processar a requisição pois a sigla do estado não existe";
        }
    }

    response.status(statusCode);
    response.json(dadosCidades);



});

//EndPoint versão 2: Lista de cidades filtrada pela sigla do estado
//Com mais detalhes
app.get('/v2/senai/cidades', cors(), async function(request, response, next) {

    //Recebe o valor da variavel que será enviada por QueryString
        //Ex: www.uol.com.br?uf=sp&cep=085561008$nome=jose
        /**
         *      Usamos a query para receber diversas variaveis para realizar filtros
         *      Usamos o params para receber o ID (PK), geralmente para fazer o PUT, DELETE, GET 
         */
    let siglaEstado = request.query.uf;
    // let cep = request.query.cep;
    // console.log(siglaEstado)
    // console.log(cep)

    let statusCode;
    let dadosCidades = {};
    

    if(siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)){
        statusCode = 400;
        cidadesEs.message = "Não é possivel processar a requisição pois sigla não foi encontrada" 
    }else {
        let cidades = estadosCidades.getCidades(siglaEstado);

        if(cidades){
            statusCode = 200;
            dadosCidades = cidades;
        }else{
            statusCode = 404;
            dadosCidades.message = "Não é possivel processar a requisição pois a sigla do estado não existe";
        }
    }

    response.status(statusCode);
    response.json(dadosCidades);



});

//Permite carregar os endpoint criados e aguarda as requições
//Pelo protocolo HTTP na porta 8080

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.');

});