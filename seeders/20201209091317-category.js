"use strict";
const db = require("../models/index");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 11,
          name: "cloths",
          createdAt: db.sequelize.fn("NOW"),
          updatedAt: db.sequelize.fn("NOW"),
        },
        {
          id: 22,
          name: "electronics",
          createdAt: db.sequelize.fn("NOW"),
          updatedAt: db.sequelize.fn("NOW"),
        },
        {
          id: 33,
          name: "pantry",
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
