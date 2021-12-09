const getUserByIdUseCase = require('../use-cases/get-user-by-id')

function getUserById(request, response) { 
    const { params } = request // Jogando o params da request numa variável
    console.log(params) // Só pra mostrar como teste

    const userFound = getUserByIdUseCase.getUserById(params.userId)
    if (!userFound) {
        return response.status(404).send({message: `No user was found with ID ${params.userId}`}) // 404 not found
    }
    return response.status(200).send({message:`User found was: ${userFound}`}) // Retorna o nome do usuário filtrado
}

module.exports = {
    getUserById
}