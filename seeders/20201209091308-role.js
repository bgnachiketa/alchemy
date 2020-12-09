"use strict";
const db = require("../models/index");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          name: "user",
          createdAt: db.sequelize.fn("NOW"),
          updatedAt: db.sequelize.fn("NOW"),
        },
        {
          id: 2,
          name: "merchent",
          createdAt: db.sequelize.fn("NOW"),
          updatedAt: db.sequelize.fn("NOW"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
