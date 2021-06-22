const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Musicalgenres.belongsToMany(models.Djs, {
        through: "DjMusicalgenres",
        foreignKey: "musicalgenre_id",
        as: "djs"
      })
    }
  };
  Musicalgenres.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(50)
    },
  }, {
    sequelize,
    modelName: 'Musicalgenres',
  });
  return Musicalgenres;
};