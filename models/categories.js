"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {}
  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  Categories.associate = (models) => {
    Categories.belongsToMany(models.Products, { through: "pivote_catg_prod" });
    // Categories.hasMany(models.Products, { through: "pivot_catg_prod" });
  };
  return Categories;
};
