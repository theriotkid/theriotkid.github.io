const express = require('express')
const routerBerita = express.Router()
const beritaControllers = require('../controllers/beritaControllers')
const auth = require('../auth/auth')

routerBerita.get('/getDataBerita', beritaControllers.getDataBerita)
routerBerita.post('/postDataBerita',  beritaControllers.postDataBerita)
routerBerita.put('/updateBerita/:_id',  beritaControllers.updateBerita)
routerBerita.delete('/deleteBerita/:_id',  beritaControllers.deleteBerita)


module.exports = routerBerita