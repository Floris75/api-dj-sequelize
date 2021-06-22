const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DjMusicalgenres.belongsTo(models.Djs, { foreignKey: "dj_id"});
      DjMusicalgenres.belongsTo(models.Musicalgenres, {foreignKey: "musicalgenre_id"});
    }
  };
  DjMusicalgenres.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dj_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Djs',
        key: 'id'
      }
    },
    musicalgenre_id: {
      allowNull: false,
      type: DataTypes.UUID,
      references: {
        model: 'Musicalgenres',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'DjMusicalgenres',
  });
  return DjMusicalgenres;
};