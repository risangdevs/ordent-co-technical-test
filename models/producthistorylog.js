'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductHistoryLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductHistoryLog.init({
    ProductId: DataTypes.INTEGER,
    log: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductHistoryLog',
  });
  return ProductHistoryLog;
};