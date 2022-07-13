'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdated: 'CASCADE'
      },
      categoryId: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdated: 'CASCADE'
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories')
  }
};

