'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    nomeCliente: DataTypes.STRING,
    emailCliente: DataTypes.STRING,
    passwordCliente: DataTypes.STRING,
    saldo: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};