const express = require('express')
require('dotenv').config()
const routerUser = require('./routes/routeUser')
const routerGambar = require('./routes/routeGambar')
const routeVideo = require('./routes/routeVideo')
const routeBerita = require('./routes/routeBerita')
const mongoose = require('mongoose')
const session = require('express-session');

const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use(session({
    secret: '@aokwowka@kakwowak@oakwoakoskdoakjakagf',
    resave: false,
    saveUninitialized: false
}))

const port = 3000
app.use(routerUser)
app.use(routerGambar)
app.use(routeVideo)
app.use(routeBerita)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error: '))
db.once('open', ()=>{
    console.log('database connected!')
})

app.listen(port, 'localhost', () => {
    console.log(`server listened on http://localhost:${port}`)
})
