'use strict'

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
*/

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreingKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreingKey: true,
    }
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (db) => {
    db.Category.belongsToMany(db.BlogPost, {
      as: 'postCategory',
      foreingKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
    db.BlogPost.belongsToMany(db.Category, {
      as: 'postBlogPost',
      foreingKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategory;