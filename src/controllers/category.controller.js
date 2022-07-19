const categoryService = require('../services/category.service');

const postCategory = async (request, response) => { 
  const { name } = request.body;

  const category = await categoryService.postCategory(name);

  response.status(201).json(category);
};

const getAllCategories = async (_request, response) => {
  const categories = await categoryService.getAllCategories();

  response.status(200).json(categories);
};

module.exports = {
  postCategory,
  getAllCategories,
};