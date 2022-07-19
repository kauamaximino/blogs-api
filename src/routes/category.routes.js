const express = require('express');
const CategoryControllers = require('../controllers/category.controller');
const middlewares = require('../middlewares/index');

const category = express.Router();

category.post('/categories',
  middlewares.tokenValidate, middlewares.insertCategory, CategoryControllers.postCategory);

module.exports = category;