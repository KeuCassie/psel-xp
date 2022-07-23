'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ativos',
      [{
        id: 1,
        qtdeAtivo: 1,
        valor: 'samgrooves@gmail.com',
      },
      {
        id: 2,
        qtdeAtivo: 1,
        valor: 'samshaw@gmail.com',
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ativos', null, {});
  },
};