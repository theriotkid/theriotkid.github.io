const express = require('express')
const routerUser = express.Router()
const userController = require('../controllers/userController')


routerUser.get('/userByID/:_id', userController.getUser)
routerUser.post('/log', userController.loginValidate)
routerUser.post('/logout', userController.logout)
routerUser.put('/userUpdate/:_id', userController.updateUser)
routerUser.put('/userUpdatePassword/:_id', userController.changePass)

module.exports = routerUser