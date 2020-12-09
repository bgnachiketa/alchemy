"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {}

  Products.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      quantity: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  Products.associate = (models) => {
    //Products.hasMany(models.Categories, { through: "pivot_catg_prod" });
    Products.belongsToMany(models.Categories, { through: "pivot_catg_prod" });
  };
  return Products;
};
