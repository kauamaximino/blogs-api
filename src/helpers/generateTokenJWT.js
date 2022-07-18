require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });

  return token;
};

module.exports = { generateToken };
