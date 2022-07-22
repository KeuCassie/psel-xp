const ativoSchema = (sequelize, DataTypes) => {
  const ativoTable = sequelize.define("Ativo", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qtdeAtivo: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL
  }, { timestamps: false, tableName: 'Ativos' })

  return ativoTable
};

module.exports = ativoSchema;