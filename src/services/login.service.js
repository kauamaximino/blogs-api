const { User } = require('../database/models/index');

const postLogin = (email, password) => {
  const user = User.findOne({ where: { email, password } });

  if (!user) throw new Error('Invalid fields');

  const token
};

module.exports = { postLogin };