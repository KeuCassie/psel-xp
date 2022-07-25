const { Ativo, ClienteAtivo } = require('../database/models');

// requisição de cliente
const getClient = async (id) => {
    const clientBalance = await ClienteAtivo.findAll({
        attributes: ['clientId', 'ativosId', 'quantidade'],
        where: { clientId: id },
        // include não funciona
    });

    return clientBalance;
};

// requisições para investimentos get by assets
const getAssets = async (id) => {
    const asset = await Ativo.findByPk(id, {
        attributes: ['id', 'qtdeAtivo', 'valor'],
    });

    return asset;
};

module.exports = { 
    getClient,
    getAssets,
};