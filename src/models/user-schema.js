const mongoose = require('mongoose') 
const userSchema = new mongoose.Schema({ // definição das propriedades da collection
    name: {type: String, required: true},
    cpf: {type: String, length: 11, required: true},
    idade: {type: Number, required: true}

})
const users = mongoose.model("users", userSchema)

module.exports = {
    users
}