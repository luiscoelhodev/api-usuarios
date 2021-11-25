const express = require('express')
const server = express()
const port = 8080

server.use(express.json())

server.listen(port, () => {
    console.log('Servidor rodando na porta '+ port)
})

var db = []

server.get('/users', (request, response) => {
    if(db.length === 0){
        return response.status(404).send('No user was found') 
    }
    return response.status(200).send(db)
})

server.post('/users', (request, response) => {
    const body = request.body
    var contId = 0
    if(!body){
        return response.status(404).send({message: 'Please enter the required information: ID and Name.'})
    }

    if (body.id == '' || body.name == '') {
        return response.send({message: 'The information provided is not complete! ID or NAME missing.'})
    }

    for(i=0; i<= db.length ; i++) {
        if (db[i].id == body.id) {
            contId++
            return response.status(400).send({message: `This ID is already being used by another user!`})
        }

    }
    if (contId === 0) {
        console.log(body);
            db.push(body)
            console.log(db)
            return response.status(201).send({message:`User ${body.name} was succesfully created.`})
    } 
    

})

server.get('/users/:userId', (request, response) => {
    const parametros = request.params // valor dentro de userId
    console.log(parametros)
    let cont = 0 // inicializando contador para retornar erro caso ele permaneça 0 (não achou o ID no db)
     for(i=0;i<db.length;i++){
         if(db[i].id == parametros.userId){
             var nameOfUserFound = db[i].name;
             cont++
             console.log(`O valor de cont é ${cont}`)
             break; 
         }
    if (cont === 0) {
        return response.status(404).send({message: `No user was found with ID ${parametros.userId}`})
    }
    else {
        return response.status(200).send({message:`User found was: ${nameOfUserFound}`})
    }
     }
    // const userFound = db.find(user => user.id == parametros.userId);
    //if(!userFound){
        //retornar erro que nao existe 
    //}

    
})


// class User{
//     id,
//     name

//     setName(nameToBeSet){
//         this.name = nameToBeSet;
//     }
// 