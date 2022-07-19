const express = require('express');
const CategoryControllers = require('../controllers/category.controller');
const middlewares = require('../middlewares/index');

const category = express.Router();

category.post('/categories',
  middlewares.insertCategory, middlewares.tokenValidate, CategoryControllers.postCategory);

category.get('/categories', middlewares.tokenValidate, CategoryControllers.getAllCategories);

module.exports = category;