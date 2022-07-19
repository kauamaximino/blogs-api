const { User } = require('../database/models/index');
const { generateToken } = require('../helpers/generateTokenJWT');

const postLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) throw new Error('Invalid fields');

  return generateToken(email);
};

module.exports = {
  postLogin,
};