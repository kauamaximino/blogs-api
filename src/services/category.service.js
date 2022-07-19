const { Category } = require('../database/models/index');

const postCategory = async (name) => {
  console.log(`${name} category`);
  await Category.create({ name });

  const newCategory = await Category.findOne({ where: { name } });
  return newCategory;
};

module.exports = {
  postCategory,
};