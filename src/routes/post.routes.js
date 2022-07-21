const express = require('express');
const PostControllers = require('../controllers/post.controller');
const middlewares = require('../middlewares/index');

const post = express.Router();

post.post('/post',
middlewares.insertBlog,
middlewares.tokenValidate,
PostControllers.postBlogPost);

module.exports = post;