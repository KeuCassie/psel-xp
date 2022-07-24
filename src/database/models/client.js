const clientSchema = (sequelize, DataTypes) => {
  const clientTable = sequelize.define("Client", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeCliente: DataTypes.STRING,
    emailCliente: DataTypes.STRING,
    passwordCliente: DataTypes.STRING,
    cpfCliente: DataTypes.STRING,
    saldo: DataTypes.DECIMAL
  }, { timestamps: false, tableName: 'Clients' })

  return clientTable
};

module.exports = clientSchema;