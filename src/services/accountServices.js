const { Client } = require('../database/models');

const toDeposit = async ( id, deposito) => {
    const client = await Client.findOne({
        attributes: ['saldo'],
        where: { id: id },
    });

    const depositSum = Number(client.saldo) + Number(deposito);
    const totalValor = await Client.update({saldo: depositSum}, {where: { id } } );

    if (!totalValor) {
        const error = new Error('Erro: saldo não atualizado');
        error.status = 403;
        throw error;
    }
    return { id, saldo: depositSum};
};

// Requisição para pegar clientes pelo id
const getClientBalance = async (id) => {
    const clientBalance = await Client.findByPk(id, {
        attributes: ['id', 'saldo'],
    });

    return clientBalance;
};

module.exports = { 
    toDeposit,
    getClientBalance,
};