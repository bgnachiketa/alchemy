"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartProducts extends Model {}
  CartProducts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: {
        type: DataTypes.NUMBER,
        validate: {
          max: 10,
          min: 1,
        },
      },
      netAmount: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CartProducts",
    }
  );
  CartProducts.associate = (models) => {
    CartProducts.belongsTo(models.Cart, { foreignKey: "cartId" });
  };
  return CartProducts;
};
