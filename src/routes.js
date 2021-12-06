const express = require('express') // Importando o framework express
const router = new express.Router() // Criando uma variável para fazer as rotas

var db = [] // Por enquanto, nossos dados serão armazenados numa variável chamada db (database)

router.get('/users', (request, response) => { // Primeiro endpoint para listar todos os usuários cadastrados
    if(!db.length){ // Verifica se o database não está vazio
        return response.status(404).send({message:'No user was found: database is empty!'}) // Retorna status 404 not found e mensagem que o database is empty.
    }
    else return response.status(200).send(db) // Caso o database não esteja vazio, retorna o db com status 200 (request ok)
})

router.post('/users', (request, response) => { // Endpoint para inserção de usuários
    const { body } = request // Utilizando da desestruturação de objetos, jogando o body da request numa variável de mesmo nome
    if(!body){ // Caso o usuário não insira nada no body ao fazer um request de verbo post:
        return response.status(404).send({message: 'Please enter the required information: ID and Name.'})
    } // Retorna erro 404 dizendo para inserir o ID e Nome do usuário a ser adicionado no database

    else if (!body.id || !body.name) { // Verifica se as propriedades ID ou Name do body não existem:
        return response.status(400).send({message: 'The information provided is not complete! ID or NAME missing.'}) // Status 400 bad request (syntax error)
    } // Retorna a mensagem de que a informação não está completa (o usuário precisa enviar algo nas propriedades ID e Name)

    else { // Caso esteja tudo certo:
        if (db.length !== 0) { // Verifica se o db não está vazio
            for(i=0; i < db.length ; i++) { // Contador de 0 até o tamanho do db 
                if (db[i].id == body.id) { // Verifica se o ID do db.id naquela iteração é igual à propriedade ID passada no body
                    return response.status(400).send({message: `This ID is already being used by another user!`}) // Se for igual, retorna mensagem de que aquele ID já está sendo usado
                }
            }
        }
        db.push(body) // Caso chegue aqui, insere aquele body no database através do push
        return response.status(201).send({message:`User ${body.name} was succesfully created.`})
    } // Retorna mensagem de sucesso (usuário criado ou atualizado quando for verbo put)
  
})

router.get('/users/:userId', (request, response) => { // Endpoint para filtrar usuários através do userId
    const { params } = request // Jogando o params da request numa variável
    console.log(params) // Só pra mostrar como teste
    for(i=0; i<db.length; i++){ 
        if(db[i].id == params.userId){ // Verifica se o id naquela iteração é igual à propriedade userId do params (que foi o ID que o usuário digitou para buscar no database)
            var nameOfUserFound = db[i].name; // Cria variável do nome do usuário achado pegando a informação através da propriedade name do database naquela iteração (posição no array)
            return response.status(200).send({message:`User found was: ${nameOfUserFound}`}) // Retorna o nome do usuário filtrado
        }
    }
    return response.status(404).send({message: `No user was found with ID ${params.userId}`}) // 404 not found
}) 

// router.delete('/users/:userId', (request, response) => {
//     const userId = request.params.userId
//     var newDB = []

//     for (i=0; i < db.length ; i++) {
//         if (db[i].id != userId) {
//             newDB += db[i]
//         }
//     }
//     db = newDB
//     return response.send(newDB)
    
// })

module.exports = router