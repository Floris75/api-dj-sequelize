'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Djs', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn("uuid_generate_v4")
      },
      url_name: {
        type: Sequelize.STRING(50)
      },
      name: {
        type: Sequelize.STRING(50)
      },
      biography: {
        type: Sequelize.STRING(2000)
      },
      soundcloud: {
        type: Sequelize.STRING(1000)
      },
      facebook: {
        type: Sequelize.STRING(1000)
      },
      instagram: {
        type: Sequelize.STRING(1000)
      },
      spotify: {
        type: Sequelize.STRING(1000)
      },
      beatport: {
        type: Sequelize.STRING(1000)
      },
      mixcloud: {
        type: Sequelize.STRING(1000)
      },
      youtube: {
        type: Sequelize.STRING(1000)
      },
      club_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Clubs',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Djs');
  }
};