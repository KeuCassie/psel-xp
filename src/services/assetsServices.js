const { Ativo } = require('../database/models');

// requisições para investimentos get by assets
const getAssets = async (id) => {
    const asset = await Ativo.findByPk(id, {
        attributes: ['id', 'qtdeAtivo', 'valor'],
    });

    return asset
};

/* const toBuyInvest = async ({ clientId, ativosId, qtdeAtivo }) => {
    const cod = await ClienteAtivo.findOne({
        where: { clientId, ativosId },
    });

    const 
}; */

module.exports = { 
    getAssets,
};