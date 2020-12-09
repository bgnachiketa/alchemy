"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      totalQuantity: DataTypes.NUMBER,
      netAmount: DataTypes.NUMBER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  Cart.associate = (models) => {
    Cart.hasMany(models.CartProducts, { foreignKey: "id" });
  };
  return Cart;
};
