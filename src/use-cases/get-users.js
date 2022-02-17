const {users} = require("../models/user-schema")

async function getUsers() {
    const usersFound = await users.find() // Consulta na collection users utilizando o método find para retornar tudo que se encontra lá
    //validacao de regras de negocio
    // por exemplo: validar se ja existe algum ID no banco com esse ID
    // validar se o cpf é um cpf valido
    console.log('dentro do get users')
    console.log(usersFound);
    console.log('dentro do get users')

    return usersFound;
}

module.exports = {
    getUsers
}