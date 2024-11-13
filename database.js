/*
*   Módulo de conexão com o banco de dados - com o Mongoose
*/

const mongoose = require('mongoose')

//Definir a URL e a autenticação do banco de dados
const url = 'mongodb+srv://admin:123senac@clusterconest.pjvfq.mongodb.net/'

//Status de conexão (ícone de conexão)
let isConnected = false

const dbConnect = async () =>{
    if (isConnected === true) {
        await conectar()
    }
}

//Conectar
const conectar = async () => {
    if(isConnected === false){
        try {
            //Abre a conexão com o MongoDB
            await mongoose.connect(url)
            isConnected = true //Sinaliza que o banco está conectado
            console.log('MongoDB conectado')
        } catch (error) {
            console.log(`Problema detectado ${error}`)
        }
    }
}


//Desconectar
const desconectar = async () => {
    if(isConnected === true){
        try {
            //Encerra a conexão com o MongoDB
            await mongoose.disconnect(url)
            isConnected = false //Sinaliza que o banco não está conectado
            console.log('MongoDB desconectado')
        } catch (error) {
            console.log(`Problema detectado ${error}`)
        }
    }
}