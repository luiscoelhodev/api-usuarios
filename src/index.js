// O arquivo index.js contém somente as configurações de servidor:

const express = require('express') // Importando o framework express
const mongoose = require('mongoose') // Importando a ORM Mongoose
const routes = require('./routes') // Importando o arquivo 'routes.js' que se encontra na mesma pasta (src)
const server = express() // Utilizando o express numa variável para que possamos fazer os comandos abaixo
const port = 8080 // Definindo a porta como uma variável

global.globalDatabase = []; // Variável global para servir como DB
mongoose.connect( // Conectando a api ao banco de dados online/hospedado
    "mongodb+srv://luis:luis123@cluster0.dwrbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
)

server.use(express.json()) // Prepara a API para lidar com arquivos em formato json

server.use('/', routes) // A API usará os endpoints definidos no arquivo routes.js 

server.listen(port, () => { // A API usará a porta definida
    console.log('Servidor rodando na porta '+ port) // Mensagem que aparecerá quando o servidor estiver rodando
})