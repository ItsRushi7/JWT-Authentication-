const mongodb = require('mongoose')

const connected = mongodb.connect('mongodb://localhost:27017/Auth')

connected.then(() => {
    console.log('Mongodb Connected...')
}).catch(() => {
    console.log('Mongodb Not Connected...')
})

const createSchema = new mongodb.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongodb.model('User', createSchema)

module.exports = {
    User
}