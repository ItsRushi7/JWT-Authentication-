const mongodb = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connected = mongodb.connect(process.env.DATABASE_URL)

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