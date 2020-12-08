"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  picture.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
      writingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "picture",
    }
  );
  return picture;
};
