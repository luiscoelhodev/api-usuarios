const express = require('express') // Importando o framework express
const router = new express.Router() // Criando uma variável para fazer as rotas
const getUsersController = require('./controllers/get-users')
const createUsersController = require('./controllers/create-users')
const getUserByIdController = require('./controllers/get-user-by-id')

router.get('/users', getUsersController.getUsers)

router.post('/users', createUsersController.createUsers)

router.get('/users/:userId', getUserByIdController.getUserById) 

// router.delete('/users/:userId', (request, response) => {
//     var userId = request.params.userId

//     for (i=0; i < globalDatabase.length ; i++) {
//         if (globalDatabase[i].id == userId) {
//             globalDatabase.splice(i, 1);
//             break
//         }
//         return response.send(globalDatabase)
//     }
    
//     return response.status(404).send({message: `No user with ID ${userId} was found.`})
    
// })

module.exports = router