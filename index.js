const express = require('express')
const cookieParser = require('cookie-parser')
const { login, signup, jwtVerification } = require('./controller/routes')
const path = require('path')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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


app.use('/home/', jwtVerification)

app.get('/home/', (req, res) => {
    return res.status(200).render('home')
})

app.listen(port, () => {
    console.log(`http://localhost:3000/`)
})

