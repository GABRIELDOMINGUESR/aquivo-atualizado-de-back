/********************************************************************************************
 * Objetivo: Arquivo responsavel pelas variavesis, constantes e funções globais do projeto
 * Data: 2023/04/28
 * Autor: Gabriel Domingues
 * Versão: 1.0
 ********************************************************************************************/

/********************************************* Constate de ERROS **********************************************************/
 const ERROR_REQUIRED_DATA = {status: 400, message: 'Existem dados obrigatórios que não foram preenchidos.'}

/********************************************* Constate de SUCESSO **********************************************************/
 const CREATED_ITEM = {status: 201, message: 'Registro criado com sucesso' }

const ERROR_INTERNAL_SERVER = {status: 500, message: 'ERRO interno o servidor do banco de dados'}


module.exports = {
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_DATA,
    CREATED_ITEM
}