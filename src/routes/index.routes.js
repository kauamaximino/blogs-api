const express = require('express');
const login = require('./login.routes');
const user = require('./user.routes');

const router = express.Router();

router.use(login);
router.use(user);

module.exports = router;
