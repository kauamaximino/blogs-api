const express = require('express');
const login = require('./login.routes');

const router = express.Router();

router.use(login);

module.exports = router;
