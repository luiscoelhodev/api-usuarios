function getUserById(id){
    for(i=0; i<globalDatabase.length; i++){ 
        if(globalDatabase[i].id == id){ // Verifica se o id naquela iteração é igual à propriedade userId do params (que foi o ID que o usuário digitou para buscar no database)
            var nameOfUserFound = globalDatabase[i].name; // Cria variável do nome do usuário achado pegando a informação através da propriedade name do database naquela iteração (posição no array)
            return nameOfUserFound;
        }
    }
    return false
}

module.exports = {
    getUserById
}