function createUsers(id, name) {
    if (globalDatabase.length !== 0) { // Verifica se o db não está vazio
        for(i=0; i < globalDatabase.length ; i++) { // Contador de 0 até o tamanho do db 
            if (globalDatabase[i].id == id) { // Verifica se o id do globalDatabase naquela iteração é igual à propriedade id passada no body
                return false // Se for igual, retorna false, significando que o usuário não pôde ser criado
            }
        }
    }
    const userToBeInserted = {
        id,
        name
    }
    globalDatabase.push(userToBeInserted) // Caso chegue aqui, insere aquele body no database através do push
    return true
} 

module.exports = {
    createUsers
}