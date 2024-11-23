/*
*   Modelo de dados (clientes)
*/

const {model, Schema} = require('mongoose')

//Criação da estrutura de dados
const clienteSchema = new Schema({
    nomeCliente:{
        type: String
    },
    foneCliente: {
        type: String
    },
    emailCliente: {
        type: String
    }
})

module.exports = model('Clientes', clienteSchema) //Exportar para o main
