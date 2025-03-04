const express = require('express')
const { login, signup } = require('./controller/routes')
const path = require('path')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.get('/', (req, res) => {
    return res.status(200).render('login', {
        message: null
    })
})

app.post('/', login)

app.get('/signup', (req, res) => {
    return res.status(200).render('signup', {
        message: 'no'
    })
})

app.post('/signup', signup)

app.listen(port, () => {
    console.log(`http://localhost:3000/`)
})