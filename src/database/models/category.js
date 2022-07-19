'use scrict';

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  // Category.associate = (db) => {
  //   Category.hasMany(db.BlogPost, { as: 'blogPost', foreignKey: 'categoryId' });

  return Category;
};

module.exports = Category;