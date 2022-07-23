const clienteAtivosSchema = (sequelize, DataTypes) => {
  const clienteAtivosTable = sequelize.define("ClienteAtivo", {
    clientId: DataTypes.INTEGER,
    ativosId: DataTypes.INTEGER
  }, { timestamps: false, tableName: 'ClienteAtivos' })

  clienteAtivosTable.associate = models => {
    models.Ativo.belongsToMany(models.Client, {
      as: 'Clients',
      through: clienteAtivosTable,
      foreignKey: 'clientId',
      otherKey: 'ativosId'
    });
    models.Client.belongsToMany(models.Ativo, {
      as: 'Ativos',
      through: clienteAtivosTable,
      foreignKey: 'ativosId',
      otherKey: 'clientId'
    });
  };

  return clienteAtivosTable
};

module.exports = clienteAtivosSchema;