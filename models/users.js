"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      RoleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  Users.associate = (models) => {
    Users.hasOne(models.Roles);
  };
  return Users;
};
