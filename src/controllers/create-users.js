const createUserUseCase = require('../use-cases/create-users')

function createUsers(request, response) {
    const { body } = request // Utilizando da desestruturação de objetos, jogando o body da request numa variável de mesmo nome
    if(!body){ // Caso o usuário não insira nada no body ao fazer um request de verbo post:
        return response.status(404).send({message: 'Please enter the required information: ID and Name.'})
    } // Retorna erro 404 dizendo para inserir o ID e Nome do usuário a ser adicionado no database

    else if (!body.id || !body.name) { // Verifica se as propriedades ID ou Name do body não existem:
        return response.status(400).send({message: 'The information provided is not complete! ID or NAME missing.'}) // Status 400 bad request (syntax error)
    } // Retorna a mensagem de que a informação não está completa (o usuário precisa enviar algo nas propriedades ID e Name)
    
    const userWasCreated = createUserUseCase.createUsers(body.id,body.name)
    if(!userWasCreated){
        return response.status(400).send({message: 'User can`t be created'}) // Status 400 bad request (syntax error)
    }
    
    return response.status(201).send({message:`User ${body.name} was succesfully created.`})
}

module.exports = {
    createUsers
}