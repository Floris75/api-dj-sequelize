/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Dj, { foreignKey: "dj_id" });
      this.belongsTo(models.Musicalgenre, { foreignKey: "musicalgenre_id" });
    }
  };
  DjMusicalgenre.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    dj_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Djs",
        key: "id",
      },
    },
    musicalgenre_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Musicalgenres",
        key: "id",
      },
    }
  }, {
    sequelize,
    modelName: 'DjMusicalgenre',
  });
  return DjMusicalgenre;
};