"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, {
        foreignKey: "UserId",
        through: models.Cart,
      });
      User.hasMany(models.UserHistoryLog);
      User.hasMany(models.Invoice);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [5, 32], notEmpty: true },
      },
      role: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
