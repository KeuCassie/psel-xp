const express = require('express');

const assetsRouter = express.Router();
const assetsService = require('../services/assetsServices');

// requisição de cliente
assetsRouter.get('/cliente/:id', async (req, res) => {
    const { id } = req.params;
    const idClient = await assetsService.getClient(id);
    res.status(200).json(idClient);
});

// requisições para investimentos get by assets
assetsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const idAsset = await assetsService.getAssets(id);
    res.status(200).json(idAsset);
});

module.exports = {
    assetsRouter,
};