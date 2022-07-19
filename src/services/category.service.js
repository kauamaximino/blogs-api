const { Category } = require('../database/models/index');

const postCategory = async (name) => {
  await Category.create({ name });

  const newCategory = await Category.findOne({ where: { name } });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  postCategory,
  getAllCategories,
};