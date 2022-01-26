"use strict";
const fs = require(`fs`);
const { hashPass } = require("../helpers/bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const user = JSON.parse(fs.readFileSync("./dummydata/user.json", `utf8`));
    user.forEach((element) => {
      (element.createdAt = new Date()),
        (element.updatedAt = new Date()),
        (element.password = hashPass(element.password));
    });
    await queryInterface.bulkInsert("Users", user);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
