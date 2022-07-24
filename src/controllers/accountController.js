const express = require('express');

const accountRouter = express.Router();
const accountService = require('../services/accountServices');

// Requisição para depósitos e saques
accountRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const idClient = await accountService.getClientBalance(id);
    res.status(200).json(idClient);
});

module.exports = {
    accountRouter,
};