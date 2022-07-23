'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        nomeCliente: 'Samantha Grooves',
        emailCliente: 'samgrooves@gmail.com',
        passwordCliente: 'root@forever',
        cpfCliente: '425.967.870-16',
        saldo: 300,
      },
      {
        id: 2,
        nomeCliente: 'Sameen Shaw',
        emailCliente: 'samshaw@gmail.com',
        passwordCliente: 'northlight2',
        cpfCliente: '587.796.830-02',
        saldo: 300,
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
