const express = require('express')
const vidoControllers = require('../controllers/videoController')
const routerVideo = express.Router()
const auth = require('../auth/auth')
routerVideo.get('/getVideo', vidoControllers.getDataVideo)
routerVideo.get('/getVideoByCategory',  vidoControllers.getVideoByCategory)
routerVideo.post('/postDataVideo', vidoControllers.postDataVideo)
routerVideo.put('/updateVideo/:_id', vidoControllers.updateVideo)
routerVideo.delete('/deleteVideo/:_id', vidoControllers.deleteVideo)



module.exports = routerVideo