function getUsers() {
    //validacao de regras de negocio
    // por exemplo: validar se ja existe algum ID no banco com esse ID
    // validar se o cpf é um cpf valido
    console.log('dentro do get users')
    console.log(globalDatabase);
    console.log('dentro do get users')

    return globalDatabase;
}

module.exports = {
    getUsers
}