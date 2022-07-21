const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const { User } = require('../database/models');
const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { Category } = require('../database/models');

const createBlogPost = async ({ title, content, categoryIds, tokenDecoder }) => {
  const t = await sequelize.transaction();

  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (!count) throw new Error('"categoryIds" not found');
  
  const idUser = await User.findOne({ where: { email: tokenDecoder } });
    try {
      const post = await BlogPost.create({
        title,
        content,
        userId: idUser.id,
        published: new Date(),
        updated: new Date() }, { transaction: t });
      
      await Promise.all(categoryIds.map((id) => PostCategory.create({
        postId: post.id, categoryId: id,
      }, { transaction: t }))); await t.commit(); return post;
    } catch (error) {
        await t.rollback();
        return error;
    }
};

module.exports = {
  createBlogPost,
};