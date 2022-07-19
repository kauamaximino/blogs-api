require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throw new Error('Expired or invalid token');
  }
};

module.exports = { verifyToken };