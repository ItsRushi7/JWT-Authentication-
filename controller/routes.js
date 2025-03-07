const { json } = require('express')
const { User } = require('../model/connection')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

dotenv.config()

async function login(req, res) {
    const data = req.body

    const userName = data.username
    const passWord = data.password

    const findUser = await User.findOne({
        username: userName,
        password: passWord,
    })

    if (findUser == null) {
        res.status(404).render('login', {
            message: 'no'
        });
    }
    else {
        jwt.sign({ findUser },process.env.SECRET_KEY , (error, token) => {

            if (error) {
                console.log(error)
            }
            res.cookie('uid', token,)
            res.status(200).redirect('/home')
        })

    }
}

async function signup(req, res) {

    const data = req.body

    try {
        const createUser = await User.create({
            username: data.username,
            email: data.email,
            password: data.password
        })

        return res.status(201).render('signup', {
            message: 'yes'
        });
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(404).render('signup', {
                message: 'Duplicate'
            });
        }
        else {
            return res.status(500).render('signup', {
                message: 'error'
            });
        }
    }
}

function jwtVerification(req, res, next) {
    
    const token = req.cookies.uid

    jwt.verify(token, process.env.SECRET_KEY, (error, verifyData) => {
        if (error) {
            res.send({ message: 'Invalid Token' })
        }
        else {
            next()
        }
    })

}
module.exports = {
    login,
    signup,
    jwtVerification
}