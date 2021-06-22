module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DjMusicalgenres', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn("uuid_generate_v4")
      },
      dj_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Djs",
          key: "id"
        }
      },
      musicalgenre_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Musicalgenres",
          key: "id"
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
    await queryInterface.dropTable('DjMusicalgenres');
  }
};