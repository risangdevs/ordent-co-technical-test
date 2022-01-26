"use strict";
const fs = require(`fs`);
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
    const product = JSON.parse(
      fs.readFileSync("./dummydata/productFiltered.json", `utf8`)
    );
    product.forEach((e) => {
      (e.createdAt = new Date()), (e.updatedAt = new Date());
    });
    await queryInterface.bulkInsert("Products", product);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Product", null, {});
  },
};
