"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {}
  Roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  Roles.associate = (models) => {
    Roles.belongsTo(models.Users, { foreignKey: "id", as: "RoleId" });
  };
  return Roles;
};
