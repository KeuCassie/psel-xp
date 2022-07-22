'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClienteAtivos', {
      clientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Clients',
          key: 'id',
        },
      },
      ativosId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Ativos',
          key: 'id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clienteAtivos');
  }
};