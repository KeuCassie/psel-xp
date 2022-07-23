'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      emailCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      passwordCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpfCliente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      saldo: {
        type: Sequelize.DECIMAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};