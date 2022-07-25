const express = require('express');

const accountRouter = express.Router();
const accountService = require('../services/accountServices');

// Requisição para depósitos
accountRouter.post('/deposito', async (req, res) => {
    const deposit = await accountService.toDeposit(req.body);
    res.status(201).json(deposit);
});

// Requisição para pegar clientes pelo id
accountRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const idClient = await accountService.getClientBalance(id);
    res.status(200).json(idClient);
});

module.exports = {
    accountRouter,
};