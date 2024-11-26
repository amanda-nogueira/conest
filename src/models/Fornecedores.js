/*
*   Modelo de dados (fornecedores)
*/

const { model, Schema } = require('mongoose')

//Criação da estrutura de dados
const fornecedorSchema = new Schema({
    nomeFornecedor: {
        type: String
    },
    foneFornecedor: {
        type: String
    },
    siteFornecedor: {
        type: String
    }
})

//Para modificar o nome da coleção ("tabela"), basta modificar na linha abaixo o rótulo 'Fornecedores", sempre iniciando com letra maiúscula.
module.exports = model('Fornecedores', fornecedorSchema) //Exportar para o main
