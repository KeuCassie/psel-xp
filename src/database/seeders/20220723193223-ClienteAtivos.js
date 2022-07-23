'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClienteAtivos',
      [
        {
          clientId: 1,
          ativosId: 1,
        },
        {
          clientId: 2,
          ativosId: 2,
        },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ClienteAtivos', null, {});
  },
};