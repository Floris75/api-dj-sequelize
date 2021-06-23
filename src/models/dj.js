const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Club, { foreignKey: "club_id", as: "clubs" });
      this.belongsToMany(models.Musicalgenre, {
        through: "DjMusicalgenres",
        foreignKey: "dj_id",
        as: "musical_genres",
      });
    }
  }
  Dj.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      url_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      biography: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
      soundcloud: {
        type: DataTypes.STRING(1000),
      },
      facebook: {
        type: DataTypes.STRING(1000),
      },
      instagram: {
        type: DataTypes.STRING(1000),
      },
      spotify: {
        type: DataTypes.STRING(1000),
      },
      beatport: {
        type: DataTypes.STRING(1000),
      },
      mixcloud: {
        type: DataTypes.STRING(1000),
      },
      youtube: {
        type: DataTypes.STRING(1000),
      },
      club_id: {
        type: DataTypes.UUID,
        references: {
          model: "Clubs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Dj",
    }
  );
  return Dj;
};
