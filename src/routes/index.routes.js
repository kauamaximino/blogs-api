const express = require('express');
const login = require('./login.routes');
const user = require('./user.routes');
const category = require('./category.routes');

const router = express.Router();

router.use(login);
router.use(user);
router.use(category);

module.exports = router;
