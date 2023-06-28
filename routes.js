var express = require('express');
var routes = express.Router();
const userController = require('./Controllers/userController');
const verifyToken = require('./Middlewares/verifyToken');

routes.get("/")
routes.post('/user', userController.create)
routes.post('/login', userController.login)



module.exports = routes
