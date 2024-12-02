const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username :{
        required: true,
        type: String
    },
    password :{
        required: true,
        type: String
    },
    address :{
        required: false,
        type: String
    },
    fullName :{
        required: false,
        type: String
    },
    age:{
        required: false,
        type: String
    },
    division:{
        required: false,
        type: String
    },
    class:{
        required: false,
        type: String
    },
    pics:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Users', userSchema, 'users')