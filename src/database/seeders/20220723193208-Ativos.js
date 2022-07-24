'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ativos',
      [{
        id: 1,
        qtdeAtivo: 800,
        valor: 29.90,
      },
      {
        id: 2,
        qtdeAtivo: 900,
        valor: 69.90,
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ativos', null, {});
  },
};