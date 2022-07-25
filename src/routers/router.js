const express = require('express');
require('express-async-errors');

const { clientRouter } = require('../controllers/clientController');
const { assetsRouter } = require('../controllers/assetsController');
const { accountRouter } = require('../controllers/accountController');


const routers = express.Router();

routers.use('/login', clientRouter);
routers.use('/ativos', assetsRouter);
routers.use('/conta', accountRouter);

module.exports = { routers };