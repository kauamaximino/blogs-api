const express = require('express');
const LoginControllers = require('../controllers/login.controller');

const login = express.Router();

login.get('/login', LoginControllers.postLogin);

module.exports = login;