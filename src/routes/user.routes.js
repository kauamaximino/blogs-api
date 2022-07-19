const express = require('express');
const userControllers = require('../controllers/user.controller');
const middlewares = require('../middlewares/index');

const user = express.Router();

user.post('/user', middlewares.insertUserValidate, userControllers.postUser);

user.get('/user/:id', middlewares.tokenValidate, userControllers.getUserID);

user.get('/user', middlewares.tokenValidate, userControllers.getAllUsers);

module.exports = user;