const { User } = require('../model/connection')

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
        res.status(200).render('login', {
            message: 'yes'
        });
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

module.exports = {
    login,
    signup
}