const clienteAtivosSchema = (sequelize, DataTypes) => {
  const clienteAtivosTable = sequelize.define("ClienteAtivo", {
    clientId: DataTypes.INTEGER,
    ativosId: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'ClienteAtivos' })

  return clienteAtivosTable
};

module.exports = clienteAtivosSchema;