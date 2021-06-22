'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Clubs);
      this.belongsToMany(models.Musicalgenre, {
        through: "DjMusicalgenres",
        foreignKey: "dj_id",
        as: "musical_genres"
      })
    }
  };
  Djs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    url_name: {
      type: DataTypes.STRING(50)
    },
    name: {
      type: DataTypes.STRING(50)
    },
    biography: {
      type: DataTypes.STRING(2000)
    },
    soundcloud: {
      type: DataTypes.STRING(1000)
    },
    facebook: {
      type: DataTypes.STRING(1000)
    },
    instagram: {
      type: DataTypes.STRING(1000)
    },
    spotify: {
      type: DataTypes.STRING(1000)
    },
    beatport: {
      type: DataTypes.STRING(1000)
    },
    mixcloud: {
      type: DataTypes.STRING(1000)
    },
    youtube: {
      type: DataTypes.STRING(1000)
    },
    club_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Clubs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Djs',
  });
  return Djs;
};