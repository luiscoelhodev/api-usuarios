const getUsersUseCase = require('../use-cases/get-users')

function getUsers(request, response) { 
    //toda validacao de input (request) fica no controller
    //por exemplo: checar se o campo id existe
    // checar se o campo nome é uma string 
    const users = getUsersUseCase.getUsers()
    console.log(users)
    if(!users.length){
        return response.status(404).send({message:'No user was found: database is empty!'}) // Retorna status 404 not found e mensagem que o database is empty.
    }
    return response.status(200).send(users) // Caso o database não esteja vazio, retorna o db com status 200 (request ok)
}

module.exports = {
    getUsers
}