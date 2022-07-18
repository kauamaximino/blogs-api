const express = require('express');
const LoginControllers = require('../controllers/login.controller');
const middlewares = require('../middlewares/index');

const login = express.Router();

login.post('/login', middlewares.loginValidate, LoginControllers.postLogin);

module.exports = login;