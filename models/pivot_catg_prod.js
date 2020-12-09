"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pivot_catg_prod extends Model {}
  pivot_catg_prod.init(
    {
      categoryId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pivot_catg_prod",
    }
  );

  return pivot_catg_prod;
};
