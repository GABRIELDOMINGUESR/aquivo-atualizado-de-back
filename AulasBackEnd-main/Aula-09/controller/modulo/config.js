/******************************************************************************************
 * Objetivo: Arquivo responsável pelas váriaveis, constantes e funções globais do projeto
 * Autor: Gabriel Domingues
 * Data: 28/04/2023
 * Versão: 1.0
 ******************************************************************************************/

/*************************************Constantes de ERROS**********************************/
const ERRO_REQUIRED_DATA = {stauts: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'};

const ERROR_INTERNAL_SERVER = {stauts: 500, message: 'Erro interno no servidor de Bando de Dados.'};

const ERROR_INFALID_CONTENT_TYPE = {stauts: 415, message: 'O tipo de mídia Content-typeda solicitação não é compatível com o servidor, [application/json]'};

/*************************************Constantes de SUCESSO**********************************/
const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso.'};
const UPDATED_ITEM = {status: 200, message: 'Registro atualizado com sucesso.'};
const DELETED_ITEM = {status: 200, message: 'Registro deletado com sucesso.'};

const ERRO_REQUIRED_ID = {stauts: 400, message: 'O Atributo ID é obrigatório dados obrigatório na requisição.'};

module.exports = {
    ERRO_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM,
    ERRO_REQUIRED_ID,
    UPDATED_ITEM,
    DELETED_ITEM,
    ERROR_INFALID_CONTENT_TYPE
}