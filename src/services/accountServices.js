const { Client } = require('../database/models');

// Requisição para depósitos e saques
const getClientBalance = async (id) => {
    const clientBalance = await Client.findByPk(id, {
        attributes: ['id', 'saldo'],
    });

    return clientBalance;
};

module.exports = { 
    getClientBalance,
};