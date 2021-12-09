// O arquivo index.js contém somente as configurações de servidor:

const express = require('express') // Importando o framework express
const routes = require('./routes') // Importando o arquivo 'routes.js' que se encontra na mesma pasta (src)
const server = express() // Utilizando o express numa variável para que possamos fazer os comandos abaixo
const port = 8080 // Definindo a porta como uma variável

global.globalDatabase = []; // Variável global para servir como DB

server.use(express.json()) // Prepara a API para lidar com arquivos em formato json

server.use('/', routes) // A API usará os endpoints definidos no arquivo routes.js 

server.listen(port, () => { // A API usará a porta definida
    console.log('Servidor rodando na porta '+ port) // Mensagem que aparecerá quando o servidor estiver rodando
})