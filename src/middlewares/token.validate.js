const { verifyToken } = require('../helpers/verifyTokenJWT');

const tokenValidate = async (request, response, next) => {
  try {
    const { authorization } = request.headers;
  
  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }

  await verifyToken(authorization);

  return next();
  } catch (error) {
    return response.status(401).json({ message: error.message });
  }
};

module.exports = tokenValidate;