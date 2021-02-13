'use strict';

const items = [
  {
    id: 1234,
    name: "Hammer",
    createdAt: new Date(), 
    updatedAt: new Date(), 
  },
  {
    id: 5678,
    name: "Nails",
    createdAt: new Date(), 
    updatedAt: new Date(), 
  }
];
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
    return queryInterface.bulkInsert("Items", items, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(
      "Items",
      {id: {[Sequelize.Op.in]: items.map(i => i.id)}},
      {}
    );
  }
};
