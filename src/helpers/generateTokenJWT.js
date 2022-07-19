require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (credentials) => {
  const token = jwt.sign({ credentials }, process.env.JWT_SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = { generateToken };
